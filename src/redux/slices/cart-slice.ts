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
      const isAlreadyAdded = state.cartItems.find(
        (item) => payload.id === item.id
      );

      console.log(isAlreadyAdded);

      if (!isAlreadyAdded) {
        const newCartItem = { ...payload, quantity: 1 };
        state.cartItems = [newCartItem, ...state.cartItems];
        // state.totalcalculateTotal()
        state.total = calculateTotal(state);
        successToast("Added To Cart");

        return;
      }

      errorToast("Already In Cart");
    },

    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = newCartItems;
      state.total = calculateTotal(state);
    },
    showCart: (state, { payload }) => {
      state.openCart = payload;
    },
  },
});

export const { addToCart, removeFromCart, showCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
