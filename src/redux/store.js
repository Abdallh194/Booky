import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";

let Store = configureStore({
  reducer: {
    books: BookSlice,
  },
});
export default Store;
