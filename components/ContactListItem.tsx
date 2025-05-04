import React from 'react'; // Import thư viện React để sử dụng JSX và tạo component.
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Import các thành phần giao diện từ React Native.

type Props = {
  name: string; // Tên liên hệ.
  avatar: string; // URL hình đại diện liên hệ.
  phone: string; // Số điện thoại liên hệ.
  onPress: () => void; // Hàm xử lý khi nhấn vào liên hệ.
};

export default function ContactListItem({ name, avatar, phone, onPress }: Props) { // Định nghĩa component ContactListItem.
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}> {/* Container có thể nhấn được. */}
      <Image
        source={{ uri: avatar }} // Hiển thị hình đại diện từ URL.
        style={styles.avatar} // Áp dụng kiểu dáng cho hình đại diện.
        resizeMode="cover" // Đặt chế độ hiển thị hình ảnh.
        onError={(e) => console.log('Avatar load error', e.nativeEvent)} // Xử lý lỗi khi tải hình ảnh.
      />
      <View style={styles.info}> {/* Phần hiển thị thông tin liên hệ. */}
        <Text style={styles.name}>{name}</Text> {/* Hiển thị tên liên hệ. */}
        <Text style={styles.phone}>{phone}</Text> {/* Hiển thị số điện thoại liên hệ. */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho ContactListItem.
  container: {
    flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang.
    padding: 16, // Thêm khoảng cách bên trong.
    borderBottomWidth: 1, // Đặt đường viền dưới.
    borderColor: '#eee', // Màu đường viền.
    backgroundColor: '#fff', // Màu nền trắng.
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc.
  },
  avatar: {
    width: 48, // Chiều rộng hình đại diện.
    height: 48, // Chiều cao hình đại diện.
    borderRadius: 24, // Bo tròn hình đại diện.
    backgroundColor: '#ccc', // Màu nền khi không có hình ảnh.
  },
  info: {
    marginLeft: 16, // Thêm khoảng cách bên trái.
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc.
    flex: 1, // Chiếm toàn bộ không gian còn lại.
  },
  name: {
    fontSize: 16, // Kích thước chữ cho tên.
    fontWeight: 'bold', // Đặt chữ đậm.
  },
  phone: {
    fontSize: 14, // Kích thước chữ cho số điện thoại.
    color: '#888', // Màu chữ xám.
  },
});
