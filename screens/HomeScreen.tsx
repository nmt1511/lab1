import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Thêm PJ4 → PJ6 vào danh sách điều hướng
type RootStackParamList = {
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
};


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const data = [
    { id: '1', title: 'Dự án 1', screen: 'PJ1' },
    { id: '2', title: 'Dự án 2', screen: 'PJ2' },
    { id: '3', title: 'Dự án 3', screen: 'PJ3' },
    { id: '4', title: 'Dự án 4', screen: 'PJ4' },
    { id: '5', title: 'Dự án 5', screen: 'PJ5' },
    { id: '6', title: 'Dự án 6', screen: 'PJ6' },
    { id: '7', title: 'Dự án 7', screen: 'PJ7' },
    { id: '8', title: 'Dự án 8', screen: 'PJ8' },
    { id: '9', title: 'Dự án 9', screen: 'PJ9' },
    { id: '10', title: 'Dự án 10', screen: 'PJ10' },
  ];
  

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: { fontSize: 18 },
});
