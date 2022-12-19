import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAxios } from "../../helpers/api";
import { URL } from "../../helpers/urls";
import { errorToast } from "../../components/toastify/toastify";
import { ORDER } from "../../types/order.type";

const errorMessage: string = "Please check your internet";

export const getOrders: any = createAsyncThunk(
  "get-orders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiAxios.get(URL.getOrders);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeOrderStatus: any = createAsyncThunk(
  "change-order-status",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiAxios.put(URL.changeOrderStatus, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

type IinitialState = {
  orders: ORDER[] | null;
  loading: boolean;
};

const initialState: IinitialState = {
  orders: [],
  loading: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(getOrders.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      if (payload && payload?.status === 200) {
        state.orders = payload?.data;
        state.loading = false;
        return;
      } else {
        errorToast(errorMessage);
        state.loading = false;
        return;
      }
    });

    builder.addCase(getOrders.rejected, (state) => {
      state.loading = false;
      errorToast(errorMessage);
    });
  },
});

export default orderSlice.reducer;
