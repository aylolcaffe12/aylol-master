import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import SHOP_DATA from "../shop.data";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: true,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SHOP_DATA);
      }, 0); // Simulate a 500ms delay
    });
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const fetchCategories = createAsyncThunk(
//   "categories/fetchCategories",
//   async () => {
//     const response = await getCategories();
//     return response;
//   }
// );

export const categoriesReducer = categoriesSlice.reducer;

/* Old manual REDUX implementation

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      return state;
  }
};

export const setCategories = (categoriesArray) => {
  return { type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload: categoriesArray };
}; */
