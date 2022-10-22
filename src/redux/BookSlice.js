import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
  name: "counter",
  initialState: {
    cartItems: [],
    user: "Abdallh",
    pass: "1234",
  },
  reducers: {
    AddBookToCart: (state, action) => {
      let isexit = false;
      state.cartItems.forEach((p) => {
        if (p.id === action.payload.id) {
          p.qty++;
          isexit = true;
        }
      });
      if (!isexit) {
        state.cartItems.push(action.payload);
      }
    },
    DeleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el.id !== action.payload
      );
    },
    HandleRegister: (state, action) => {
      state.user = action.payload.newusername;
      state.pass = action.payload.newpassword;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddBookToCart, DeleteItemFromCart, HandleRegister } =
  BookSlice.actions;

export default BookSlice.reducer;
