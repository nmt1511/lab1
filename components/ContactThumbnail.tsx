import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  avatar: string;
  name?: string;
  phone?: string;
  onPress?: () => void;
};

export default function ContactThumbnail({ avatar, name, phone, onPress }: Props) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container style={styles.container} onPress={onPress}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      {!!name && <Text style={styles.name}>{name}</Text>}
      {!!phone && <Text style={styles.phone}>{phone}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
});
