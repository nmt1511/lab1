// Import các hook cần thiết từ React
import React, { useEffect, useState } from 'react';
// Import các thành phần UI từ React Native
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
// Import component hiển thị thông tin người dùng (avatar, tên, số điện thoại)
import ContactThumbnail from '../../components/ContactThumbnail';
// Import hàm gọi API để lấy dữ liệu người dùng
import { fetchUserContact } from '../../utils/api';

// Component User là màn hình hiển thị thông tin người dùng
export default function User() {
  // State lưu thông tin người dùng, khởi tạo là null
  const [user, setUser] = useState<any>(null);

  // State kiểm soát trạng thái đang tải dữ liệu
  const [loading, setLoading] = useState(true);

  // State kiểm soát nếu có lỗi xảy ra khi lấy dữ liệu
  const [error, setError] = useState(false);

  // useEffect chạy một lần duy nhất sau khi component được render lần đầu tiên
  useEffect(() => {
    // Gọi API lấy thông tin người dùng
    fetchUserContact()
      .then((data) => {
        // Nếu thành công, lưu dữ liệu người dùng và tắt trạng thái loading
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        // Nếu có lỗi, bật cờ lỗi và tắt trạng thái loading
        setError(true);
        setLoading(false);
      });
  }, []); // [] nghĩa là effect chỉ chạy 1 lần khi component mount

  // Nếu đang loading, hiển thị vòng tròn chờ
  if (loading) return <ActivityIndicator size="large" style={styles.center} />;

  // Nếu có lỗi hoặc không có dữ liệu người dùng, hiển thị thông báo lỗi
  if (error || !user) return <Text style={styles.error}>Không thể tải dữ liệu người dùng.</Text>;

  // Nếu có dữ liệu, hiển thị thông tin người dùng với ContactThumbnail
  return (
    <View style={styles.container}>
      <ContactThumbnail avatar={user.avatar} name={user.name} phone={user.phone} />
    </View>
  );
}

// Định nghĩa các style dùng trong component
const styles = StyleSheet.create({
  // Container bao toàn bộ giao diện, căn giữa và nền xanh
  container: {
    flex: 1,
    backgroundColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Style để căn giữa vòng loading
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  // Style cho dòng chữ lỗi
  error: {
    marginTop: 50,
    textAlign: 'center',
    color: 'red',
  },
});
