import { createSlice } from "@reduxjs/toolkit";

export interface productState {
  name: "";
  price: number;
  description?: string;
  phone: [string];
  category: string;
  colour?: string;
  size?: number;
}

const initialState = {
  products: [],
  selectedProduct: {},
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = productSlice.actions;
// export const useProduct = (state: RootState) => state.products;
export default productSlice.reducer;
