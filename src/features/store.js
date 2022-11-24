// create store in redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./api/productsSlice";
import localFeaturesReducer from "./siteFeatures/localFeaturesSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    localFeatures: localFeaturesReducer,
  },
});

export default store;
