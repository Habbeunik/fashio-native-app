import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../screens/landing';
import AuthNavigation from './auth';

const AppNavigation = createSwitchNavigator({
  Landing: {
    screen: LandingScreen
  },
  AuthStack: {
    screen: AuthNavigation
  }

}, {
  'headerMode': 'none'
});

export default createAppContainer(AppNavigation)