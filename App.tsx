import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AboutScreen from './screens/AboutScreen'; // giả sử bạn có màn Giới thiệu
import HomeScreen from './screens/HomeScreen';
import PJ1Screen from './screens/lab1/pj1';
import PJ10Screen from './screens/lab1/pj10';
import PJ2Screen from './screens/lab1/pj2';
import PJ3Screen from './screens/lab1/pj3';
import PJ4Screen from './screens/lab1/pj4';
import PJ5Screen from './screens/lab1/pj5';
import PJ6Screen from './screens/lab1/pj6';
import PJ7Screen from './screens/lab1/pj7';
import PJ8Screen from './screens/lab1/pj8';
import PJ9Screen from './screens/lab1/pj9';
import CalculatorScreen from './screens/lab2/CalculatorApp';


type RootStackParamList = {
  Tabs: undefined;
  PJ1: undefined;
  PJ2: undefined;
  PJ3: undefined;
  PJ4: undefined;
  PJ5: undefined;
  PJ6: undefined;
  PJ7: undefined;
  PJ8: undefined;
  PJ9: undefined;
  PJ10: undefined;
  Calculator: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// Tab menu dưới gồm Home và Giới thiệu
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Giới thiệu" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        {/* Menu dưới */}
        <Stack.Screen name="Tabs" component={MainTabs} options={{ headerShown: false }} />
        {/* Các màn PJ */}
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Máy tính' }} />
        <Stack.Screen name="PJ1" component={PJ1Screen} options={{ title: 'Project 1' }} />
        <Stack.Screen name="PJ2" component={PJ2Screen} options={{ title: 'Project 2' }} />
        <Stack.Screen name="PJ3" component={PJ3Screen} options={{ title: 'Project 3' }} />
        <Stack.Screen name="PJ4" component={PJ4Screen} options={{ title: 'Project 4' }} />
        <Stack.Screen name="PJ5" component={PJ5Screen} options={{ title: 'Project 5' }} />
        <Stack.Screen name="PJ6" component={PJ6Screen} options={{ title: 'Project 6' }} />
        <Stack.Screen name="PJ7" component={PJ7Screen} options={{ title: 'Project 7' }} />
        <Stack.Screen name="PJ8" component={PJ8Screen} options={{ title: 'Project 8' }} />
        <Stack.Screen name="PJ9" component={PJ9Screen} options={{ title: 'Project 9' }} />
        <Stack.Screen name="PJ10" component={PJ10Screen} options={{ title: 'Project 10' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

