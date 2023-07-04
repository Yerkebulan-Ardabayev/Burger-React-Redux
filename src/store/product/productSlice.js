import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../Const/ConstApi";

const initialState = {
  products: [],
  error: ""
};

export const productRequestAsynk = createAsyncThunk(
  "product/fetch",
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((res) => res.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsynk.pending.type, (state) => {
        state.error = "";
      })
      .addCase(productRequestAsynk.fulfilled.type, (state, action) => {
        state.error = "";
        state.products = action.payload;
      })
      .addCase(productRequestAsynk.rejected.type, (state, action) => {
        state.error = action.payload.error;
      });
  }
});

export default productSlice.reducer;
