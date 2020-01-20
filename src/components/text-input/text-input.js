import React from 'react';
import { TextInput as NativeTextInput, View } from 'react-native';
import styles from './text-input-style';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../styles/theme';

const TextInput = (props) => (
  <View style={styles.wrapper} >
    {props.icon && <Icon style={styles.icon} name={props.icon} color={theme.colors.grey} size={18} />}
    <NativeTextInput {...props} style={styles.input} />
  </View>
);

export default TextInput;