import { createSlice } from "@reduxjs/toolkit";
import { IdData } from "./IdData";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [...IdData],
  },
  reducers: {
    saveTodo: (state, action) => {
      return { ...state, todo: [...state.todo, action.payload] };
    },
    deleteTodo: (state, action) => {
      return { ...state, todo: [...action.payload] };
    },
    doneTodo: (state, action) => {
      return { ...state, todo: [...action.payload] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTodo, deleteTodo, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;
