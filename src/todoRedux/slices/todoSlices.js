import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { input: "", tasks: [], editing: null, complete: [] },
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
      state.tasks = state.tasks.filter((task, index) => {
        return index !== action.payload;
      });
    },

    editTask: (state, action) => {
      state.editing = action.payload;
      state.input = state.tasks[action.payload];
    },

    completedTask: (state, action) => {
      state.complete = [...state.complete, action.payload];
    },
  },
});

export const { setInput, setTasks, deleteTask, editTask, completedTask } =
  todoSlice.actions;
export default todoSlice.reducer;
