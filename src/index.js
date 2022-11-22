import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import { fetchCategories, fetchProducts } from "./features/api/productsSlice";

// fetch all categories
store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
const root = ReactDOM.createRoot(document.getElementById("root"));
// fetch data from api

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
