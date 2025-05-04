import React, { useEffect } from 'react'; // Import React và useEffect để sử dụng hook.
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'; // Import các thành phần giao diện từ React Native.
import { useDispatch, useSelector } from 'react-redux'; // Import các hook của Redux để quản lý state.
import ContactListItem from '../../components/ContactListItem'; // Import component tùy chỉnh để hiển thị từng liên hệ.
import {
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
} from '../../store'; // Import các action từ store Redux.
import {
  fetchContacts,
} from '../../utils/api'; // Import hàm fetchContacts để lấy dữ liệu từ API.

export default function Contacts({ navigation }: any) { // Định nghĩa component Contacts, nhận navigation làm prop.
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để gửi action đến Redux store.

  // ✅ Chỉ lấy phần state.contacts
  const { contacts, loading, error } = useSelector((state: any) => state.contacts); // Lấy dữ liệu contacts, loading và error từ state Redux.

  useEffect(() => { // Hook useEffect để thực hiện side effect khi component được render.
    dispatch(fetchContactsLoading()); // Gửi action để đặt trạng thái loading.
    fetchContacts() // Gọi API để lấy danh sách liên hệ.
      .then((data) => dispatch(fetchContactsSuccess(data))) // Nếu thành công, gửi action để lưu dữ liệu vào Redux store.
      .catch(() => dispatch(fetchContactsError())); // Nếu thất bại, gửi action để đặt trạng thái lỗi.
  }, []); // Chỉ chạy một lần khi component được mount.

  const renderItem = ({ item }: any) => ( // Hàm renderItem để hiển thị từng liên hệ.
    <ContactListItem
      name={item.name} // Truyền tên liên hệ.
      avatar={item.avatar} // Truyền hình đại diện liên hệ.
      phone={item.phone} // Truyền số điện thoại liên hệ.
      onPress={() => navigation.navigate('Profile', { contact: item })} // Điều hướng đến màn hình Profile khi nhấn vào liên hệ.
    />
  );

  const sortedContacts = contacts.slice().sort((a: any, b: any) => a.name.localeCompare(b.name)); // Sắp xếp danh sách liên hệ theo tên.

  return (
    <View style={styles.container}> {/* Container chính cho màn hình Contacts. */}
      {loading && <ActivityIndicator size="large" />} {/* Hiển thị vòng xoay tải nếu đang loading. */}
      {error && <Text style={styles.error}>Lỗi khi tải danh sách liên hệ.</Text>} {/* Hiển thị thông báo lỗi nếu có lỗi. */}
      {!loading && !error && ( // Nếu không loading và không có lỗi, hiển thị danh sách liên hệ.
        <FlatList
          data={sortedContacts} // Truyền danh sách liên hệ đã sắp xếp.
          keyExtractor={(item) => item.phone} // Đặt key cho từng mục là số điện thoại.
          renderItem={renderItem} // Sử dụng hàm renderItem để hiển thị từng mục.
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho màn hình Contacts.
  container: {
    backgroundColor: '#fff', // Đặt màu nền trắng.
    flex: 1, // Làm cho container chiếm toàn bộ màn hình.
  },
  error: {
    color: 'red', // Đặt màu chữ đỏ cho thông báo lỗi.
    textAlign: 'center', // Căn giữa văn bản.
    marginTop: 20, // Thêm khoảng cách trên cùng là 20 pixel.
  },
});
