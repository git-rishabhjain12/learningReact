import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products.products; // Selector to access the products state

export default productSlice.reducer;
