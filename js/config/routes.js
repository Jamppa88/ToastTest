/**
 * Here is the Navigator, with the different screens
 * Note Home-attribute is essential for the router
 */

import { StackNavigator } from 'react-navigation';
import { Container } from '../components/container';
import { AltContainer } from '../components/alt-container';

export default StackNavigator({
  Home: {screen: Container},
  Alt: {screen: AltContainer}
});
