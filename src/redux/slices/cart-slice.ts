import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../components/toastify/toastify";
import { PRODUCT } from "../../types/product.type";

interface ICart {
  cartItems: PRODUCT[] | null;
  openCart: boolean;
  length: number;
  total: number;
}

const initialState: ICart = {
  cartItems: null,
  openCart: false,
  length: 0,
  total: 0,
};

const calculateTotal = (state: ICart): number => {
  let total: number = 0;
  state?.cartItems?.map((item: any) => {
    return (total += item?.price * item?.quantity);
  });
  return total;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<any>) => {
      state.cartItems = payload;
      state.total = calculateTotal(state);
    },
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const isAlreadyAdded = state.cartItems?.find(
        (item) => payload._id === item._id
      );

      if (!isAlreadyAdded) {
        const newCartItem = { ...payload };
        // state.cartItems = [newCartItem, ...state.cartItems];
        // state.totalcalculateTotal()
        // state.cartItems = state?.cartItems?.push(newCartItem) ?? null;
        // state.total = calculateTotal(state);
        // successToast("Added To Cart");

        return;
      }

      errorToast("Already In Cart");
    },

    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const newCartItems = state.cartItems?.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = newCartItems ?? null;
      state.total = calculateTotal(state);
    },
    clearCart: (state) => {
      state.cartItems = null;
    },
    showCart: (state, { payload }) => {
      state.openCart = payload;
    },
  },
});

export const { addToCart, removeFromCart, showCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
