import { configureStore } from '@reduxjs/toolkit';
import listReducer from './modules/listSlice';

// creating store
const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
