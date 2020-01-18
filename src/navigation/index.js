import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../screens/landing';

const AppNavigation = createStackNavigator({
  Landing: {
    screen: LandingScreen
  }
}, {
  'headerMode': 'none'
});

export default createAppContainer(AppNavigation)