import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#7ce0f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Square = ({ text }: { text: string }) => (
  <View style={styles.box}>
    <Text>{text}</Text>
  </View>
);

export default function PJ5Screen() {
  return (
    <View style={styles.container}>
      <Square text="1" />
      <Square text="2" />
      <Square text="3" />
      <Square text="4" />
    </View>
  );
}
