import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  product: null,
  categories: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// get all products
export const fetchProducts = createAsyncThunk(
  "products/fetchPosts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  }
);

// Get products in a specific category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get(`${PRODUCTS_URL}/category/${category}`);
    return response.data;
  }
);

// get paginated products
export const fetchPaginatedProducts = createAsyncThunk(
  "products/fetchPaginatedProducts",
  async (page) => {
    const response = await axios.get(`${PRODUCTS_URL}/?limit=${page}`);
    return response.data;
  }
);

// fetch all categories
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(`${PRODUCTS_URL}/categories`);
    return response.data;
  }
);

// fetch a single product
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const response = await axios.get(`${PRODUCTS_URL}/${id}`);
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
  reducers: {},
  extraReducers(builder) {
    builder
      // fetch all products
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
      // fetch paginated products
      .addCase(fetchPaginatedProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPaginatedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchPaginatedProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // fetch single product
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // fetch all categories
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = [...action.payload];
      })
      // fetch products by category
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
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
export const selectProduct = (state) => state.products.product;
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);
export const selectProductStatus = (state) => state.products.status;
export const selectProductCategories = (state) => state.products.categories;

export const selectProductByCategory = createSelector(
  [selectAllProducts, (state, category) => category],
  (products, category) =>
    products.filter((product) => product.category === category)
);

export default productSlice.reducer;
