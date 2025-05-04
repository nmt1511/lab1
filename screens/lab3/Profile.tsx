import React from 'react'; // Import thư viện React để sử dụng JSX và tạo component.
import { StyleSheet, View } from 'react-native'; // Import StyleSheet để tạo kiểu và View để bố trí giao diện từ React Native.
import ContactThumbnail from '../../components/ContactThumbnail'; // Import component tùy chỉnh để hiển thị hình đại diện liên hệ.
import DetailListItem from '../../components/DetailListItem'; // Import component tùy chỉnh để hiển thị các mục chi tiết.

export default function Profile({ route }: any) { // Định nghĩa component Profile, nhận route làm prop.
  const { contact } = route.params; // Lấy đối tượng contact từ tham số route.
  const { avatar, name, email, phone, cell } = contact; // Trích xuất các trường cụ thể từ đối tượng contact.

  return (
    <View style={styles.container}> {/* Container chính cho màn hình Profile. */}
      <View style={styles.avatarSection}> {/* Phần hiển thị hình đại diện và tên. */}
        <ContactThumbnail avatar={avatar} name={name} phone={phone} /> {/* Hiển thị component ContactThumbnail với các prop avatar, name và phone. */}
      </View>
      <View style={styles.detailsSection}> {/* Phần hiển thị chi tiết liên hệ. */}
        <DetailListItem icon="mail" title="Email" subtitle={email} /> {/* Hiển thị một mục chi tiết cho email. */}
        <DetailListItem icon="phone" title="Work" subtitle={phone} /> {/* Hiển thị một mục chi tiết cho số điện thoại công việc. */}
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} /> {/* Hiển thị một mục chi tiết cho số điện thoại cá nhân. */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho màn hình Profile.
  container: {
    flex: 1, // Làm cho container chiếm toàn bộ màn hình.
  },
  avatarSection: {
    flex: 1, // Làm cho phần avatar chiếm một nửa màn hình.
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang.
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc.
    backgroundColor: '#007aff', // Đặt màu nền xanh dương.
  },
  detailsSection: {
    flex: 1, // Làm cho phần chi tiết chiếm nửa còn lại của màn hình.
    backgroundColor: '#fff', // Đặt màu nền trắng.
  },
});
