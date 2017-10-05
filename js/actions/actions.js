/**
 * ActionCreators for Redux
 *
 * Usage:
 * import * as actions from './actions/actions';
 */

export function Increment() {
   return {
     type: 'INCREMENT'
   };
 }

export function Decrement() {
   return {
     type: 'DECREMENT'
   };
 }

export function Clear() {
   return {
     type: 'CLEAR'
   };
 }
