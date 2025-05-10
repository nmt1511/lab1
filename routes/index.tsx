import * as Icons from '@expo/vector-icons';
const MaterialIcons = Icons.MaterialIcons;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Contacts from '../screens/lab3/Contacts';
import Favorites from '../screens/lab3/Favorites';
import Options from '../screens/lab3/Options';
import Profile from '../screens/lab3/Profile';
import User from '../screens/lab3/User';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
const getIcon = (name: MaterialIconName) => ({ color }: { color: string }) => (
  <MaterialIcons name={name} size={22} color={color} />
);

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Contact"
      component={Contacts}
      options={{ tabBarIcon: getIcon('list') }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorites}
      options={{ tabBarIcon: getIcon('star') }}
    />
  </Tab.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        title: 'Me',
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            style={{ marginRight: 10 }}
            color="black"
            onPress={() => navigation.navigate('Options')}
          />
        ),
      })}
    />
    <Stack.Screen name="Options" component={Options} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeTabs">
        <Drawer.Screen
          name="HomeTabs"
          component={HomeStack}
          options={{ drawerIcon: getIcon('home') }}
        />
        <Drawer.Screen
          name="UserTab"
          component={UserStack}
          options={{ drawerIcon: getIcon('person') }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
