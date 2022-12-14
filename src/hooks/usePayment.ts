import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import useCart from "./useCart";

type Props = {
  name?: string;
  location?: string;
  phone?: string;
  landmark?: string;
  email?: string;
};

const usePayment = ({ name, location, phone, landmark, email }: Props) => {
  const navigate = useNavigate();
  const { cartItems, total } = useCart();
  const config: any = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: total * 100,
    publicKey: "pk_test_85e230e7de9474a347f14097497dec1cf914f0ab",
    currency: ["GHS"],
  };

  const orderData = {
    name,
    location,
    phone,
    landmark,
    email,
    items: cartItems,
    totalPrice: total,
  };

  const onSuccess = () => {
    const makeRequest = async () => {
      const response = await axios.post(
        "http://localhost:4000/api/v1/orders/create-order",
        {
          data: orderData,
        }
      );

      if (response?.data?.data) {
        navigate("/checkout/success");
        return;
      }
    };

    makeRequest();
  };

  const onClose = () => {};

  const initializePayment = usePaystackPayment(config);

  const makePayment = () => {
    initializePayment(onSuccess, onClose);
  };

  return {
    makePayment,
  };
};

export default usePayment;
