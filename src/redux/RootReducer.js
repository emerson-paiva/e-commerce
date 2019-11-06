import { combineReducers } from 'redux';

import cartReducer from './cart/CartReducer';
import userReducer from './user/UserReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
