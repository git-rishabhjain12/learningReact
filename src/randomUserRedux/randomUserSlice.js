import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomUser = createAsyncThunk(
  "randomUser/fetchRandom",
  async () => {
    const response = await axios.get("https://randomuser.me/api");
    console.log(response.data.results[0]);
    return response.data.results[0];
  }
);

export const randomUserSlice = createSlice({
  name: "randomUser",
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchRandomUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = randomUserSlice.actions;
export default randomUserSlice.reducer;
