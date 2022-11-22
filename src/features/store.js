// create store in redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./api/productsSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
