import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  category: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    toggleCategories: (state, action) => {
      console.log(state);
      if (!state.category.includes(action.payload)) {
        state.category.push(action.payload);
      } else {
        state.category = state.category.filter((category) => category !== action.payload);
      }
    },
  },
});

export const { toggle,toggleCategories } = filterSlice.actions;

export default filterSlice.reducer;
