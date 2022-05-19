import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: [],
  },
  reducers: {
    allRecipe: (state, action) => {
      return { recipe: action.payload };
    },
  },
});

export const { allRecipe } = todoSlice.actions;

export default todoSlice.reducer;
