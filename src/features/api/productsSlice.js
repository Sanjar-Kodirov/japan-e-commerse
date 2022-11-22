import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchPosts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  }
);
export const addNewProduct = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await axios.post(PRODUCTS_URL, initialPost);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    const { id } = initialPost;
    // try-catch block only for development/testing with fake API
    // otherwise, remove try-catch and add updatePost.rejected case
    try {
      const response = await axios.put(`${PRODUCTS_URL}/${id}`, initialPost);
      return response.data;
    } catch (err) {
      //return err.message;
      return initialPost; // only for testing Redux!
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const { id } = initialPost;

    const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // addNewProduct(state, action) {
    //     state.products.push(action.payload);
    // },
    // updateProduct(state, action) {
    //     const { id, title, body } = action.payload;
    //     const existingPost = state.products.find((post) => post.id === id);
    //     if (existingPost) {
    //         existingPost.title = title;
    //         existingPost.body = body;
    //     }
    // },
    // deleteProduct(state, action) {
    //     const { id } = action.payload;
    //     return state.products.filter((post) => post.id !== id);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.concat(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, title, body } = action.payload;
        const existingPost = state.products.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.body = body;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { id } = action.payload;
        return state.products.filter((post) => post.id !== id);
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);
export const selectProductStatus = (state) => state.products.status;

export const selectProductByCategory = createSelector(
  [selectAllProducts, (state, category) => category],
  (products, category) =>
    products.filter((product) => product.category === category)
);

export default productSlice.reducer;
