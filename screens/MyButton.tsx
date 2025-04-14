import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const MyButton = ({ text, onPress, style }: Props) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;
