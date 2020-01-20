import React from 'react';
import { Text } from 'react-native';
import styles from './typography-style';

const Body1 = ( props ) => (
  <Text {...props} style={{...styles.body1, textAlign: props.align}} />
);

export default Body1;
