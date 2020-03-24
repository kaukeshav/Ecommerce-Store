import { combineReducers } from 'redux';

import { cartReducer, userReducer } from './modules';

export default combineReducers({
  user: userReducer, // key user re-present key in overall state object
  cart: cartReducer
});
