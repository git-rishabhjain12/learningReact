import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/todoSlices";

export default configureStore({
  reducer: { todo: todoListReducer },
});
