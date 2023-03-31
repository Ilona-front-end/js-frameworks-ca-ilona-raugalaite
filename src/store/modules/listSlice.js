import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.noroff.dev/api/v1/online-shop';
// fetchItems gets all items available, while cartSlice is ment to show selected items to buy that are placed in the cart
export const fetchItems = createAsyncThunk('fetchItems', async () => {
  return fetch(URL).then((response) => response.json()).catch((error) => console.log(error));
});

const URL_ITEM_ID = `https://api.noroff.dev/api/v1/online-shop/1`; //change to id
export const fetchItem = createAsyncThunk('fetchItems', async () => {
  return fetch(URL_ITEM_ID).then((response) => response.json()).catch((error) => console.log(error));
});

const initialState = {
  items: [],
  total: 0,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // INSERT_ITEMS: (state, action) => {
    //   state.items = action.payload;
    // }
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      console.log('action', action);
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      console.log('fetch rejected', action);
    },
  }
});
// console.log('cartSlice', cartSlice);

export default listSlice.reducer;
