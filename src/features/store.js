// create store in redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./apiSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
