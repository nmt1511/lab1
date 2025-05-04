import { MaterialIcons } from '@expo/vector-icons'; // Import thư viện MaterialIcons để sử dụng các biểu tượng.
import React from 'react'; // Import thư viện React để sử dụng JSX và tạo component.
import { StyleSheet, Text, View } from 'react-native'; // Import các thành phần giao diện từ React Native.

type Props = {
  icon?: string; // Tên biểu tượng (không bắt buộc).
  title: string; // Tiêu đề.
  subtitle?: string; // Phụ đề (không bắt buộc).
};

export default function DetailListItem({ icon, title, subtitle }: Props) { // Định nghĩa component DetailListItem.
  return (
    <View style={styles.container}> {/* Container chính cho DetailListItem. */}
      {icon && <MaterialIcons name={icon as any} size={24} style={styles.icon} />} {/* Hiển thị biểu tượng nếu có. */}
      <View> {/* Container cho tiêu đề và phụ đề. */}
        <Text style={styles.title}>{title}</Text> {/* Hiển thị tiêu đề. */}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>} {/* Hiển thị phụ đề nếu có. */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho DetailListItem.
  container: {
    flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang.
    padding: 16, // Thêm khoảng cách bên trong.
    borderBottomWidth: 1, // Đặt đường viền dưới.
    borderColor: '#eee', // Màu đường viền.
  },
  icon: {
    marginRight: 16, // Thêm khoảng cách bên phải biểu tượng.
    color: '#888', // Màu biểu tượng.
  },
  title: {
    fontSize: 16, // Kích thước chữ cho tiêu đề.
    fontWeight: 'bold', // Đặt chữ đậm.
  },
  subtitle: {
    fontSize: 14, // Kích thước chữ cho phụ đề.
    color: '#555', // Màu chữ xám đậm.
  },
});
