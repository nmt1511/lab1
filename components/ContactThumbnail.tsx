import React from 'react'; // Import thư viện React để sử dụng JSX và tạo component.
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Import các thành phần giao diện từ React Native.

type Props = {
  avatar: string; // URL hình đại diện liên hệ.
  name?: string; // Tên liên hệ (không bắt buộc).
  phone?: string; // Số điện thoại liên hệ (không bắt buộc).
  onPress?: () => void; // Hàm xử lý khi nhấn vào liên hệ (không bắt buộc).
};

export default function ContactThumbnail({ avatar, name, phone, onPress }: Props) { // Định nghĩa component ContactThumbnail.
  const Container = onPress ? TouchableOpacity : View; // Nếu có onPress, sử dụng TouchableOpacity, nếu không thì sử dụng View.

  return (
    <Container style={styles.container} onPress={onPress}> {/* Container có thể nhấn được nếu có onPress. */}
      <Image source={{ uri: avatar }} style={styles.avatar} /> {/* Hiển thị hình đại diện từ URL. */}
      {!!name && <Text style={styles.name}>{name}</Text>} {/* Hiển thị tên nếu có. */}
      {!!phone && <Text style={styles.phone}>{phone}</Text>} {/* Hiển thị số điện thoại nếu có. */}
    </Container>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho ContactThumbnail.
  container: {
    alignItems: 'center', // Căn giữa các phần tử theo chiều ngang.
    margin: 8, // Thêm khoảng cách xung quanh.
  },
  avatar: {
    width: 80, // Chiều rộng hình đại diện.
    height: 80, // Chiều cao hình đại diện.
    borderRadius: 40, // Bo tròn hình đại diện.
    marginBottom: 8, // Thêm khoảng cách dưới hình đại diện.
  },
  name: {
    fontSize: 16, // Kích thước chữ cho tên.
    fontWeight: 'bold', // Đặt chữ đậm.
  },
  phone: {
    fontSize: 14, // Kích thước chữ cho số điện thoại.
    color: '#666', // Màu chữ xám nhạt.
  },
});
