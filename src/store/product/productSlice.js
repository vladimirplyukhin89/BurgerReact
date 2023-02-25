import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "./../../constants";

const initialState = {
  products: [],
  error: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch",
  (category) => {
    return fetch(`${API_URL}${POSTFIX}?category=${category}`)
      .then((req) => req.json())
      .catch((error) => ({ error }));
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = "";
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        (state.error = ""), (state.products = action.payload);
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
