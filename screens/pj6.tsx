import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function PJ6Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[...Array(20)].map((_, i) => (
        <Text key={i} style={styles.item}>
          Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});
