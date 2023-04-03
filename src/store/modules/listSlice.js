import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  singleItem: {},
  // total: 0,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    INSERT_ITEMS: (state, action) => { // state is current state, action is the payload (update)
      state.items = action.payload; // payload is what we get from the API
    },
    INSERT_SINGLE_ITEM: (state, action) => { // state is current state, action is the payload (update)
      state.singleItem = action.payload; // payload is what we get from the API
    }
  }
});
export default listSlice.reducer;

// Actions
const { INSERT_ITEMS } = listSlice.actions;
const { INSERT_SINGLE_ITEM } = listSlice.actions;

// FETCH ALL ITEMS
export const fetchItems = () => async dispatch => {
  try {
    const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
    const data = await response.json();
    dispatch(INSERT_ITEMS(data)); 
  } catch (error) {
    console.log(error);
  }
}

// FETCH SINGLE ITEM
export const fetchItem = (id) => async dispatch => {
  try {
    const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
    const data = await response.json();
    dispatch(INSERT_SINGLE_ITEM(data)); // use INSERT_SINGLE_ITEM to update singleItem object
  } catch (error) {
    console.log(error);
  }
}
