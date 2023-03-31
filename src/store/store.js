import { configureStore } from '@reduxjs/toolkit';
import listReducer from './modules/cartSlice';

// creating store
const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
