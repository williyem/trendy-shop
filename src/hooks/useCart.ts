import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "./../redux/hooks";

const useCart = () => {
  const { cartItems, total } = useAppSelector((state) => {
    console.log(state);
    return state.carts;
  });
  const dispatch = useAppDispatch();

  return {
    cartItems,
    cartLength: cartItems?.length,
    total: total,
  };
};

export default useCart;
