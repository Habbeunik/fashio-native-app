import React from 'react';
import { Text } from 'react-native';
import styles from './typography-style';

const CaptionText = ( props ) => (
  <Text {...props} style={{...styles.caption, textAlign: props.align, ...props.style}} />
);

export default CaptionText;
