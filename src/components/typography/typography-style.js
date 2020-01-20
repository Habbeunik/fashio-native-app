import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  header1: {
    fontFamily: theme.font.bold,
    textTransform: 'uppercase',
    color: '#333',
    fontSize: 20,
    marginVertical: 15
  },
  body1: {
    fontFamily: theme.font.medium,
    fontSize: 15,
    color: '#333',
    marginVertical: 10,
    lineHeight: 17
  },
  caption: {
    fontSize: 11,
    fontFamily: theme.font.medium,
    lineHeight: 15,
    color: theme.colors.grey,
    marginVertical: 10,
  }
})