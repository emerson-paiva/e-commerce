import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/CartReducer';
import userReducer from './user/UserReducer';
import directoryReducer from './directory/reducer';
import shopReducer from './shop/reducer';

const persistConfig = {
  key: 'root',
  storage,

  // add reducers name that you want to persist
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
