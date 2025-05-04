import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts', // ✅ rất quan trọng: tên này sẽ dùng khi gọi useSelector(state => state.contacts)
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchContactsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.loading = false; 
    },
    fetchContactsError: (state) => {
      state.loading = false;
      state.error = true;
    },
    
  },
});

export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} = contactsSlice.actions;

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer, 
  },
});

export default store;
