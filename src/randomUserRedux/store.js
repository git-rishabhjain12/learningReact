import { configureStore } from "@reduxjs/toolkit";
import { randomUserSlice } from "./randomUserSlice";

const store = configureStore({
  reducer: {
    randomUserReducer: randomUserSlice.reducer,
  },
});

export default store;
