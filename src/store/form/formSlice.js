import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { closeModal } from "../modalDelivery/modalDeliverySlice";
import { clearGoods } from "../order/orderSlice";

const initialState = {
  name: "",
  phone: "",
  format: "delivery",
  address: "",
  floor: "",
  intercom: "",
};

export const submitForm = createAsyncThunk(
  "form/submit",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://cloudy-slash-rubidium.glitch.me/api/order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      dispatch(clearGoods());
      dispatch(closeModal());

      const result = await response.json();
      return result;
    } catch (e) {
      console.error(e.message);
      return rejectWithValue(e.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.error = null;
        state.result = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.error = "";
        state.result = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateFormValue } = formSlice.actions;
export default formSlice.reducer;
