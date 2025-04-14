import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButtonScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}>
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonText: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    fontSize: 16,
  },
});
