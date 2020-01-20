import { createStackNavigator } from 'react-navigation-stack';
import SignUpScreen from '../screens/sign-up';

const AuthNavigation = createStackNavigator({
  SignUp: {
    screen: SignUpScreen
  }
}, {
  headerMode: 'none'
});

export default AuthNavigation;
