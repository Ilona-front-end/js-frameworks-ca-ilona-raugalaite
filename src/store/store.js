import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import listSlice from './modules/listSlice';
import basketSlice from './modules/basketSlice';

const reducer = combineReducers({
  list: listSlice,
  basket: basketSlice,
});

// creating store
const store = configureStore({
  reducer,
});

export default store;
