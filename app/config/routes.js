import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Home from '../components/Home';

const AppNavigator = StackNavigator({
  Home: { screen: Home }

});

export default AppNavigator;
