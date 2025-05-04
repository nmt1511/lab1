import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Contacts from '../screens/lab3/Contacts';
import Favorites from '../screens/lab3/Favorites';

const Tab = createBottomTabNavigator();

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
const getIcon = (name: MaterialIconName) => ({ color }: { color: string }) => (
  <MaterialIcons name={name} size={24} color={color} />
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // tắt header nếu bạn dùng Stack bọc ngoài
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{ tabBarIcon: getIcon('list') }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ tabBarIcon: getIcon('star') }}
      />
    </Tab.Navigator>
  );
}
