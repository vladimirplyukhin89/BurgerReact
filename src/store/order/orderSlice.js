import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "./../../constants";

import { calcTotal } from "../../utils";

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
  orderGoods: [],
  totalPrice: 0,
  totalCount: 0,
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);
  if (nextAction.type.startsWith("order/", 0)) {
    const orderList = store.getState().order.orderList;
    localStorage.setItem("order", JSON.stringify(orderList));
  }

  return nextAction;
};

export const orderRequestAsync = createAsyncThunk(
  "order/fetch",
  (_, { getState }) => {
    const listId = getState().order.orderList.map((item) => item.id);

    return fetch(`${API_URL}${POSTFIX}?list=${listId}`)
      .then((req) => req.json())
      .catch((error) => ({ error }));
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productOrderList = state.orderList.find(
        (item) => item.id === action.payload.id
      );
      if (productOrderList) {
        productOrderList.count += 1;

        const productOrderGoods = state.orderGoods.find(
          (item) => item.id === action.payload.id
        );

        productOrderGoods.count = productOrderList.count;
        [state.totalCount, state.totalPrice] = calcTotal(state.orderGoods);
      } else {
        state.orderList.push({ ...action.payload, count: 0 });
      }
    },
    removeProduct: (state, action) => {
      const productOrderList = state.orderList.find(
        (item) => item.id === action.payload.id
      );
      if (productOrderList.count > 0) {
        productOrderList.count -= 1;

        const productOrderGoods = state.orderGoods.find(
          (item) => item.id === action.payload.id
        );

        productOrderGoods.count = productOrderList.count;
        [state.totalCount, state.totalPrice] = calcTotal(state.orderGoods);
      } else {
        state.orderList = state.orderList.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearGoods: (state) => {
      state.orderList = [];
      state.orderGoods = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderRequestAsync.pending, (state) => {
        state.error = "";
      })
      .addCase(orderRequestAsync.fulfilled, (state, action) => {
        const orderGoods = state.orderList.map((item) => {
          const product = action.payload.find(
            (product) => product.id === item.id
          );
          product.count = item.count;
          return product;
        });

        state.error = "";
        state.orderGoods = orderGoods;
      })
      .addCase(orderRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { addProduct, removeProduct, clearGoods } = orderSlice.actions;
export default orderSlice.reducer;
