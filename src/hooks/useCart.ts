import { useAppSelector } from "./../redux/hooks";

const useCart = () => {
  const { cartItems, total } = useAppSelector((state) => {
    console.log(state);
    return state.carts;
  });

  return {
    cartItems,
    cartLength: cartItems?.length,
    total: total,
  };
};

export default useCart;
