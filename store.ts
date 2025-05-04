import { configureStore, createSlice } from '@reduxjs/toolkit'; // Import các hàm từ Redux Toolkit.

const contactsSlice = createSlice({ // Tạo slice cho state "contacts".
  name: 'contacts', // ✅ Tên slice, dùng khi gọi useSelector(state => state.contacts).
  initialState: { // Trạng thái ban đầu của slice.
    contacts: [], // Danh sách liên hệ.
    loading: false, // Trạng thái đang tải.
    error: false, // Trạng thái lỗi.
  },
  reducers: { // Định nghĩa các reducer để thay đổi state.
    fetchContactsLoading: (state) => { // Reducer để đặt trạng thái loading.
      state.loading = true;
      state.error = false;
    },
    fetchContactsSuccess: (state, action) => { // Reducer để lưu danh sách liên hệ khi tải thành công.
      state.contacts = action.payload; // Lưu danh sách liên hệ từ action payload.
      state.loading = false; 
    },
    fetchContactsError: (state) => { // Reducer để đặt trạng thái lỗi.
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchContactsLoading, // Action để đặt trạng thái loading.
  fetchContactsSuccess, // Action để lưu danh sách liên hệ.
  fetchContactsError, // Action để đặt trạng thái lỗi.
} = contactsSlice.actions;

const store = configureStore({ // Tạo Redux store.
  reducer: {
    contacts: contactsSlice.reducer, // Thêm reducer của slice "contacts" vào store.
  },
});

export default store; // Xuất store để sử dụng trong ứng dụng.
