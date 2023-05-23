import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { input: "", tasks: [], editing: null },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },

    setTasks: (state, action) => {
      if (state.editing !== null) {
        state.tasks[state.editing] = state.input;
        state.editing = null;
      } else {
        state.tasks.push(state.input);
      }
      state.input = "";
    },

    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },

    editTask: (state, action) => {
      state.editing = action.payload;
      state.input = state.tasks[action.payload];
    },
  },
});

export const { setInput, setTasks, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
