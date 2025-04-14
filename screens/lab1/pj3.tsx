import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MyButton from '../MyButton';

export default function PJ3() {
  return (
    <View style={styles.container}>
      <MyButton
        text="Click Here"
        onPress={() => Alert.alert('Pressed!')}
        style={{ padding: 10, backgroundColor: 'orange', borderRadius: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
