export const fetchContacts = async () => { // Hàm để lấy danh sách liên hệ từ API.
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio'); // Gửi yêu cầu đến API.
    const data = await response.json(); // Chuyển đổi phản hồi thành JSON.
    return data.results.map((item: any) => ({ // Chuyển đổi dữ liệu API thành định dạng cần thiết.
      avatar: item.picture?.large, // URL hình đại diện.
      name: `${item.name.first} ${item.name.last}`, // Tên đầy đủ.
      email: item.email, // Email liên hệ.
      phone: item.phone, // Số điện thoại.
      cell: item.cell, // Số điện thoại cá nhân.
      favorite: Math.random() < 0.3, // Đánh dấu liên hệ yêu thích ngẫu nhiên.
    }));
};

export const fetchUserContact = async () => { // Hàm để lấy thông tin liên hệ của người dùng.
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio'); // Gửi yêu cầu đến API.
    const data = await response.json(); // Chuyển đổi phản hồi thành JSON.
    return {
      avatar: data.results[0].picture.large, // URL hình đại diện của người dùng.
      name: `${data.results[0].name.first} ${data.results[0].name.last}`, // Tên đầy đủ của người dùng.
      phone: data.results[0].phone, // Số điện thoại của người dùng.
    };
};
