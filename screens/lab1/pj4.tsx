import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PJ4Screen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bạn đã nhấn {count} lần</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Nhấn vào tôi" onPress={() => setCount(count + 1)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Reset" color="red" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  text: { fontSize: 20, marginBottom: 20 },
  buttonContainer: { marginVertical: 10, width: 150 },
});
