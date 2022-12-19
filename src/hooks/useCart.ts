import { useAppSelector } from "./../redux/hooks";

const useCart = () => {
  const { cartItems } = useAppSelector((state) => {
    return state.carts;
  });

  const totalPrice = cartItems?.reduce((curr, next) => curr + next.price, 0);

  return {
    cartItems,
    cartLength: cartItems?.length,
    total: totalPrice,
  };
};

export default useCart;
