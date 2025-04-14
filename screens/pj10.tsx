import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type Item = { id: string; title: string };

const ListItem = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

export default function PJ10Screen() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now().toString(), title: text }]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter item"
        style={styles.input}
      />
      <Button title="Add" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
});
