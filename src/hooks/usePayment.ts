import { usePaystackPayment } from "react-paystack";

type Props = {
  name?: string;
  location?: string;
  phone?: string;
  landmark?: string;
  email?: string;
};

const usePayment = ({ name, location, phone, landmark, email }: Props) => {
  const config: any = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: "pk_test_85e230e7de9474a347f14097497dec1cf914f0ab",
    currency: ["GHS"],
  };

  const onSuccess = () => {};

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
