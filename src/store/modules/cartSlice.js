import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.noroff.dev/api/v1/online-shop';

export const fetchItems = createAsyncThunk('fetchItems', () => {
  return fetch(URL).then((response) => response.json()).catch((error) => console.log(error));
});

const initialState = {
  items: [],
  amountOfOneItem: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      console.log('action', action);
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      console.log('fetch rejected', action);
    }
  }
});
// console.log('cartSlice', cartSlice);

export default cartSlice.reducer;
