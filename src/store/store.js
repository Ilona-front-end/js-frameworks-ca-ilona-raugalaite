import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import listSlice from './modules/listSlice';

const reducer = combineReducers({
  list: listSlice,
});

// creating store
const store = configureStore({
  reducer,
});

export default store;
