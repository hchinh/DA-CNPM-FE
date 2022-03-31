import { configureStore } from '@reduxjs/toolkit';
//import adminReducer from '../features/Auth/authSlice';
import cartReducer from '../containers/Cart/cartSlice';

const rootReducer = {
  //admin: adminReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
