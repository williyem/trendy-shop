import { useAppSelector } from "./../redux/hooks";

const useCart = () => {
  const { cartItems, total } = useAppSelector((state) => {
    return state.carts;
  });

  return {
    cartItems,
    cartLength: cartItems?.length,
    total,
  };
};

export default useCart;
