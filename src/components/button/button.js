import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './button-style';

const Button = ({ onPress, content}) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper} >
    <Text style={styles.text} >{content}</Text>
  </TouchableOpacity>
);

export default Button;
