import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
    const newItem = action.payload;
    state.items.find((item) => newItem.id === item.id);
  },
  removeItemToCart(state) {},
},
});
