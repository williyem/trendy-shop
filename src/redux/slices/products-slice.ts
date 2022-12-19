import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorToast } from "../../components/toastify/toastify";
import { apiAxios } from "../../helpers/api";
import { URL } from "../../helpers/urls";

export enum PRODUCT_CATEGORY {
  CLOTHING,
  ACCESSORIES,
  OTHERS,
}

export interface Inputs {
  name: string;
  price: number | string;
  description?: string;
  photos?: [string];
  inStock?: number;
  category: PRODUCT_CATEGORY;
}

const errorMessage: string = "Please check your internet";

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

export const getProductByCategory: any = createAsyncThunk(
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

export const createProduct: any = createAsyncThunk(
  "create-product",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiAxios.post(URL.createProduct, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct: any = createAsyncThunk(
  "delete-product",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiAxios.delete(
        `${URL.deleteProduct}/${data?.productId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  selectedProduct: {},
  imageUrls: [],
  loading: false,
  crudLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    assignUrls: (state, { payload }) => {
      state.imageUrls = payload;
    },
    clearUrls: (state) => {
      state.imageUrls = [];
    },
    setCrudLoading: (state, { payload }) => {
      state.crudLoading = payload;
    },
    setProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
  extraReducers: (builder) => {
    //get all products
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      if (!!payload && payload?.data?.status === 200) {
        state.products = payload?.data;
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
    builder.addCase(getProductByCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductByCategory.fulfilled, (state, { payload }) => {
      if (!!payload && payload?.status === 200) {
        state.products = payload.data;
      } else {
        errorToast(errorMessage);
      }
      state.loading = false;
    });
    builder.addCase(getProductByCategory.rejected, (state) => {
      state.loading = false;
      errorToast(errorMessage);
    });
    // create product
    builder.addCase(createProduct.pending, (state) => {
      state.crudLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      // if (!!payload && payload?.status === 200) {
      //   state.selectedProduct = payload.data;
      // } else {
      //   errorToast(errorMessage);
      // }
      state.crudLoading = false;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.crudLoading = false;
      errorToast(errorMessage);
    });
  },
});

export const { assignUrls, clearUrls, setCrudLoading, setProduct } =
  productSlice.actions;
// export const useProduct = (state: RootState) => state.products;
export default productSlice.reducer;
