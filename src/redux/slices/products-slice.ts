import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../components/toastify/toastify";
import { apiAxios } from "../../helpers/api";
import { URL } from "../../helpers/urls";

export interface productState {
  name: "";
  price: number;
  description?: string;
  phone: [string];
  category: string;
  colour?: string;
  size?: number;
}

const errorMessage: string = "Failed to fetch Products";

export const getProducts: any = createAsyncThunk(
  "get-products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiAxios.get(URL.getProducts);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getProductById: any = createAsyncThunk(
  "get-products-by-id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiAxios.get(`${URL.getProducts}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all products
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      if (!!payload && payload?.data?.status === 200) {
        state.products = payload.data.data;
      } else {
        errorToast(errorMessage);
      }
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      errorToast(errorMessage);
    });

    //get product by id
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      if (!!payload && payload?.data?.status === 200) {
        state.selectedProduct = payload.data.data;
      } else {
        errorToast(errorMessage);
      }
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      errorToast(errorMessage);
    });
  },
});

// export const {} = productSlice.actions;
// export const useProduct = (state: RootState) => state.products;
export default productSlice.reducer;
