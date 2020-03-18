import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer // key user re-present key in overall state object
});
