import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface productState {
  name: "";
  price: number;
  description?: string;
  phone: [string];
  category: string;
  colour?: string;
  size?: number;
}

export interface productState {
  total: number;
  price: number;
  discount?: number;
  items: productState[];
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

export const {} = productSlice.actions;
export const useProduct = (state: RootState) => state.product;
export default productSlice.reducer;
