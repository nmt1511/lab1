import React from 'react';
import { Text, View } from 'react-native';

export default function PJ1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', // 🌈 Thêm màu nền ở đây
      }}
    >
      <Text>Hello, React Native!</Text>
    </View>
  );
}
