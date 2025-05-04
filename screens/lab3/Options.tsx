import React from 'react'; // Import thư viện React để sử dụng JSX và tạo component.
import { StyleSheet, View } from 'react-native'; // Import StyleSheet để tạo kiểu và View để bố trí giao diện từ React Native.
import DetailListItem from '../../components/DetailListItem'; // Import component tùy chỉnh để hiển thị các mục chi tiết.

export default function Options() { // Định nghĩa component Options.
  return (
    <View style={styles.container}> {/* Container chính cho màn hình Options. */}
      <DetailListItem title="Update Profile" /> {/* Hiển thị một mục chi tiết với tiêu đề "Update Profile". */}
      <DetailListItem title="Change Language" /> {/* Hiển thị một mục chi tiết với tiêu đề "Change Language". */}
      <DetailListItem title="Sign Out" /> {/* Hiển thị một mục chi tiết với tiêu đề "Sign Out". */}
    </View>
  );
}

const styles = StyleSheet.create({ // Định nghĩa các kiểu dáng cho màn hình Options.
  container: {
    flex: 1, // Làm cho container chiếm toàn bộ màn hình.
    backgroundColor: '#fff', // Đặt màu nền trắng.
    paddingTop: 16, // Thêm khoảng cách trên cùng là 16 pixel.
  },
});
