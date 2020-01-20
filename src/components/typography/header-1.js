import React from 'react';
import { Text } from 'react-native';
import styles from './typography-style';

const Header1 = ( props ) => (
  <Text {...props} style={{...styles.header1, textAlign: props.align}} />
);

export default Header1;
