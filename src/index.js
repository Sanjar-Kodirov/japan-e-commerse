import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import {
  fetchCategories,
  fetchProducts,
  fetchPaginatedProducts,
} from "./features/api/productsSlice";
import "./index.css";
// fetch all categories
store.dispatch(fetchCategories());
// fetch all products
store.dispatch(fetchProducts());
// fetch paginated products
// store.dispatch(fetchPaginatedProducts(15));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
