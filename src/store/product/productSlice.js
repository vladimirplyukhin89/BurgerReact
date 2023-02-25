import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "./../../constants";

const initialState = {
  products: [],
  error: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch",
  (category, _) => {
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
      .addCase(productRequestAsync.pending.type, (state) => {
        state.error = "";
      })
      .addCase(productRequestAsync.fulfilled.type, (state, action) => {
        (state.error = ""), (state.products = action.payload);
      })
      .addCase(productRequestAsync.rejected.type, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
