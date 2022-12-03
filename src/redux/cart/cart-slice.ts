import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ICart {
  cartItems: any[];
  total: number;
  price: number;
  openCart: boolean;
}

const initialState: ICart = {
  cartItems: [],
  total: 0,
  price: 0,
  openCart: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const isAlreadyAdded = state.cartItems.find(
        (item) => payload.id === item.id
      );

      console.log(isAlreadyAdded);

      if (!isAlreadyAdded) {
        state.cartItems = [payload, ...state.cartItems];
        toast.success("Added To Cart");
        return;
      }

      toast.error("Already In Cart");
    },

    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = newCartItems;
    },
    showCart: (state, { payload }) => {
      state.openCart = payload;
    },
    // hideCart: (state) => {
    //   state.openCart = false;
    // },
  },
});

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
// export const useCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
