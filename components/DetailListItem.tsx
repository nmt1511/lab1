import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  icon?: string;
  title: string;
  subtitle?: string;
};

export default function DetailListItem({ icon, title, subtitle }: Props) {
  const handlePress = () => {
    if (!subtitle) return;

    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('email')) {
      Linking.openURL(`mailto:${subtitle}`);
    } else if (lowerTitle.includes('work') || lowerTitle.includes('personal') || lowerTitle.includes('phone')) {
      Linking.openURL(`tel:${subtitle}`);
    } else if (lowerTitle.includes('address')) {
      const encodedAddress = encodeURIComponent(subtitle);
      Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} disabled={!subtitle}>
      {icon && <MaterialIcons name={icon as any} size={24} style={styles.icon} />}
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#007aff',
  },
});
