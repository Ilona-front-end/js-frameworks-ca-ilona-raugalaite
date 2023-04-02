import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsInBasket: [],
  amountOfItemsInBasket: 0,
};

const basketSlice = createSlice({
  name: 'shoppingBasket',
  initialState,
  reducers:{
    ADD_ITEM_TO_BASKET: (state, action) => {
      state.itemsInBasket.push(action.payload);
      state.amountOfItemsInBasket += 1;
    }
  }
});

export default basketSlice.reducer;

const { ADD_ITEM_TO_BASKET } = basketSlice.actions;

export const addItemToBasket = (item) => dispatch => {
  console.log('addItemToBasket', item);
  dispatch(ADD_ITEM_TO_BASKET(item));
}
