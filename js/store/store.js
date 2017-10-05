import React from 'react';
import { createStore, combineReducers } from 'redux';
import { StackNavigator } from 'react-navigation';

import { Container } from '../components/container';
import { AltContainer } from '../components/alt-container';

//import { AppNavigator } from '../../../../../../index.android.js';

export const AppNavigator = StackNavigator({
  Home: {screen: Container},
  Alt: {screen: AltContainer}
});

const navReducer = (state, action) => {
  console.log(AppNavigator.router.getStateForAction(action, state));
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}

const numberReducer = (state = 0, action) => {
  console.log("Dispatched action: " + action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'CLEAR':
      return 0;
    default:
      return state;
  }
}

// This goes to other files
export const store = createStore(combineReducers({
  number: numberReducer,
  nav: navReducer
}));
