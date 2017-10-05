/**
 * This is an exercise in developing with React Native,
 * using Redux and React Navigation in unison.
 *
 * Needed libraries are redux, react-redux and react-navigation
 *
 * Many thanks to existing tutorials on the topic, see these links for further
 * reference.
 * - https://github.com/ModusCreateOrg/react-navigation-redux-sample
 *
 */

import React from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigator from './config/routes';
import store from './config/store';


// Do not confuse with the name of the file, this is the root-object
// of AppWithNavigation
const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
)

// Determine what parts of redux-state we want to use.
// = state -> objects prop
const mapStateToProps = (state) => ({
  nav: state.nav
});

// connect the store in the Provider to the element
const AppWithNavigation = connect(mapStateToProps)(App);

// Export, Provider with AppWithNavigation within it.
// Provider gives the store as prop to its children.
// This will be imported as App in index.android.js in root folder
export default () => (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
);
