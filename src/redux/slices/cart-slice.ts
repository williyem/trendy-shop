import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../components/toastify/toastify";

interface ICart {
  cartItems: any[];
  openCart: boolean;
  length: number;
  total: number;
}

const initialState: ICart = {
  cartItems: [],
  openCart: false,
  length: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<any>) => {
      state.cartItems = payload;
    },
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const isAlreadyAdded = state.cartItems?.find(
        (item) => payload._id === item._id
      );

      if (!isAlreadyAdded) {
        const newCartItem = { ...payload };
        state.cartItems?.push(newCartItem);
        successToast("Added To Cart");
        return;
      }

      errorToast("Already In Cart");
    },

    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const newCartItems = state.cartItems?.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = newCartItems ?? null;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    showCart: (state, { payload }) => {
      state.openCart = payload;
    },
  },
});

export const { addToCart, removeFromCart, showCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
