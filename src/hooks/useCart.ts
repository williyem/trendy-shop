import { useAppSelector } from "./../redux/hooks";

const useCart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return {
    cartItems,
    cartLength: cartItems?.length,
  };
};

export default useCart;
