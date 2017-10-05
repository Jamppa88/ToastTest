import { combineReducers } from 'redux';

import nav from './nav';
import number from './number';

export default combineReducers({
  number,
  nav
});
