import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 15,
    backgroundColor: theme.colors.black,
    borderRadius: 5
  },
  text: {
    fontFamily: theme.font.medium,
    color: theme.colors.white,
    fontSize: 15,
    textAlign: "center",
    textTransform: 'uppercase'
  }
})