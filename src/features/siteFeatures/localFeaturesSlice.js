import { createSlice } from "@reduxjs/toolkit";

// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

const initialState = {
  isDrawerOpen: false,
};

const localFeaturesSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = localFeaturesSlice.actions;
// export reducer
export default localFeaturesSlice.reducer;
