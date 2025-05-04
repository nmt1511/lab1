import * as Icons from '@expo/vector-icons'; // Import tất cả các biểu tượng từ thư viện @expo/vector-icons.
const MaterialIcons = Icons.MaterialIcons; // Lấy MaterialIcons từ thư viện.

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import navigator dạng tab.
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import navigator dạng ngăn kéo.
import { NavigationContainer } from '@react-navigation/native'; // Import container chính cho điều hướng.
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import navigator dạng stack.
import React from 'react'; // Import thư viện React.

import Contacts from '../screens/lab3/Contacts'; // Import màn hình Contacts.
import Favorites from '../screens/lab3/Favorites'; // Import màn hình Favorites.
import Options from '../screens/lab3/Options'; // Import màn hình Options.
import Profile from '../screens/lab3/Profile'; // Import màn hình Profile.
import User from '../screens/lab3/User'; // Import màn hình User.

const Stack = createNativeStackNavigator(); // Tạo stack navigator.
const Drawer = createDrawerNavigator(); // Tạo drawer navigator.
const Tab = createBottomTabNavigator(); // Tạo tab navigator.

type MaterialIconName = keyof typeof MaterialIcons.glyphMap; // Định nghĩa kiểu cho tên biểu tượng MaterialIcons.
const getIcon = (name: MaterialIconName) => ({ color }: { color: string }) => ( // Hàm trả về biểu tượng với màu sắc.
  <MaterialIcons name={name} size={22} color={color} />
);

// ✅ Bottom Tabs cho Contacts + Favorites
const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}> {/* Tạo tab navigator cho Contacts và Favorites. */}
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{ tabBarIcon: getIcon('list') }} // Biểu tượng tab là "list".
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{ tabBarIcon: getIcon('star') }} // Biểu tượng tab là "star".
    />
  </Tab.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator> {/* Tạo stack navigator cho Home. */}
    <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} /> {/* Tab chính. */}
    <Stack.Screen name="Profile" component={Profile} /> {/* Màn hình Profile. */}
  </Stack.Navigator>
);

// ✅ Stack cho tab "User"
const UserStack = () => (
  <Stack.Navigator> {/* Tạo stack navigator cho User. */}
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        title: 'Me', // Tiêu đề màn hình.
        headerRight: () => ( // Nút cài đặt ở góc phải.
          <MaterialIcons
            name="settings"
            size={24}
            style={{ marginRight: 10 }}
            color="black"
            onPress={() => navigation.navigate('Options')} // Điều hướng đến màn hình Options.
          />
        ),
      })}
    />
    <Stack.Screen name="Options" component={Options} /> {/* Màn hình Options. */}
  </Stack.Navigator>
);

// ✅ App chính dùng Drawer chứa HomeStack + UserStack
export default function AppNavigator() {
  return (
    <NavigationContainer> {/* Container chính cho điều hướng. */}
      <Drawer.Navigator initialRouteName="HomeTabs"> {/* Tạo drawer navigator. */}
        <Drawer.Screen
          name="HomeTabs"
          component={HomeStack} // ✅ Đổi từ BottomTabs sang HomeStack.
          options={{ drawerIcon: getIcon('home') }} // Biểu tượng ngăn kéo là "home".
        />
        <Drawer.Screen
          name="UserTab"
          component={UserStack}
          options={{ drawerIcon: getIcon('person') }} // Biểu tượng ngăn kéo là "person".
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
