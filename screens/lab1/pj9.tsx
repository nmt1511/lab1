import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';

const DATA = [
  { title: 'A', data: ['Apple', 'Avocado'] },
  { title: 'B', data: ['Banana', 'Blueberry'] },
];

export default function PJ9Screen() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#eee',
    padding: 10,
  },
  item: {
    paddingLeft: 20,
    paddingVertical: 5,
  },
});
