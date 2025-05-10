# Cấu trúc dự án React Native

## Tổng quan
Dự án được tổ chức theo cấu trúc module, với các thư mục chính được phân chia theo chức năng và tính năng. Đây là một ứng dụng React Native sử dụng TypeScript, Firebase cho authentication, và React Navigation cho điều hướng.

## Cấu trúc thư mục

```
├── assets/                 # Tài nguyên tĩnh
│   ├── images/            # Hình ảnh
│   └── fonts/             # Font chữ
│
├── components/            # Components có thể tái sử dụng
│   ├── common/           # Components dùng chung
│   └── lab4/             # Components cho lab4
│
├── screens/              # Các màn hình
│   ├── lab1/             # Màn hình cho lab1
│   │   ├── pj1.tsx
│   │   ├── pj3.tsx
│   │   ├── pj4.tsx
│   │   ├── pj5.tsx
│   │   ├── pj6.tsx
│   │   ├── pj7.tsx
│   │   ├── pj9.tsx
│   │   └── pj10.tsx
│   ├── lab3/             # Màn hình cho lab3
│   │   ├── Contacts.tsx
│   │   ├── Favorites.tsx
│   │   ├── Options.tsx
│   │   ├── Profile.tsx
│   │   └── User.tsx
│   └── lab4/             # Màn hình cho lab4
│       ├── LoginScreen.tsx
│       ├── RegisterScreen.tsx
│       └── DashboardScreen.tsx
│
├── navigation/           # Cấu hình navigation
│   └── AppNavigator.tsx  # Cấu hình chính cho navigation
│
├── config/              # Cấu hình
│   └── firebase.ts      # Cấu hình Firebase
│
├── routes/              # Cấu hình routes
│   └── index.tsx        # Cấu hình routes chính
│
├── utils/              # Utility functions
│
├── store.ts            # Redux store configuration
│
├── App.tsx             # Component gốc của ứng dụng
│
├── index.ts            # Entry point của ứng dụng
│
└── app.json            # Cấu hình Expo

```

## Mô tả chi tiết

### 1. Assets
- Chứa các tài nguyên tĩnh như hình ảnh, font chữ
- Được tổ chức theo loại tài nguyên

### 2. Components
- `common/`: Chứa các components có thể tái sử dụng trong toàn bộ ứng dụng
- `lab4/`: Chứa các components đặc thù cho lab4

### 3. Screens
- `lab1/`: Chứa các màn hình cho lab1 (các project nhỏ)
- `lab3/`: Chứa các màn hình cho lab3 (Contacts, Favorites, Options, Profile, User)
- `lab4/`: Chứa các màn hình chính của lab4
  - `LoginScreen.tsx`: Màn hình đăng nhập với Firebase
  - `RegisterScreen.tsx`: Màn hình đăng ký với Firebase
  - `DashboardScreen.tsx`: Màn hình chính sau khi đăng nhập

### 4. Navigation
- `AppNavigator.tsx`: Cấu hình chính cho navigation
- Quản lý luồng điều hướng giữa các màn hình
- Xử lý authentication state

### 5. Config
- `firebase.ts`: Cấu hình Firebase
  - Khởi tạo Firebase app
  - Cấu hình Authentication
  - Cấu hình Firestore
  - Cấu hình Storage

### 6. Routes
- `index.tsx`: Cấu hình routes chính
- Định nghĩa các navigation stacks
- Cấu hình bottom tabs và drawer navigation

### 7. Store
- `store.ts`: Cấu hình Redux store
- Quản lý state toàn cục

### 8. Utils
- Chứa các hàm tiện ích
- Các hàm helper

### 9. Root Files
- `App.tsx`: Component gốc của ứng dụng
- `index.ts`: Entry point của ứng dụng
- `app.json`: Cấu hình Expo
- `tsconfig.json`: Cấu hình TypeScript
- `package.json`: Quản lý dependencies

## Dependencies chính

1. **React Native & Expo**
   - expo: ^53.0.5
   - react-native: 0.79.2
   - react: 19.0.0

2. **Navigation**
   - @react-navigation/native: ^6.1.18
   - @react-navigation/native-stack: ^6.9.12
   - @react-navigation/bottom-tabs: ^6.5.14
   - @react-navigation/drawer: ^6.1.8

3. **Firebase**
   - firebase: ^11.7.1

4. **State Management**
   - @reduxjs/toolkit: ^2.7.0
   - react-redux: ^9.2.0

5. **UI Components**
   - react-native-paper: ^4.10.0
   - @expo/vector-icons: ^14.1.0

## Quy ước đặt tên

1. **Files**:
   - Components: PascalCase (ví dụ: `LoginScreen.tsx`)
   - Utilities: camelCase (ví dụ: `formatDate.ts`)
   - Types: PascalCase (ví dụ: `UserTypes.ts`)

2. **Components**:
   - Tên file và component phải khớp nhau
   - Sử dụng hậu tố phù hợp (Screen, Component, Container)

3. **Types/Interfaces**:
   - Interface: PascalCase với prefix 'I' (ví dụ: `IUserProps`)
   - Type: PascalCase (ví dụ: `UserType`)

## Lưu ý quan trọng

1. Mỗi component nên có file riêng
2. Tách biệt logic và UI
3. Sử dụng TypeScript cho tất cả các file mới
4. Tuân thủ cấu trúc thư mục khi thêm file mới
5. Giữ các file liên quan gần nhau
6. Sử dụng ESLint và Prettier để đảm bảo code style nhất quán
7. Cập nhật tài liệu khi thêm tính năng mới 