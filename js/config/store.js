/**
 * Here is the store. The reducer is actually function call for
 * combineReducers in ./reducers/index.js.
 */

import { createStore } from 'redux';
import reducer from '../reducers';

export default createStore(reducer);
