import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  input: {
    fontFamily: theme.font.medium,
    marginLeft: 15
  },
  wrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingVertical: 10,
    marginBottom: 20
  }, 
  icon: {
    top: 0,
  }
})