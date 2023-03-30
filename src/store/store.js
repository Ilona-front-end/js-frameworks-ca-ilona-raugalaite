import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './modules/cartSlice';

// creating store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
