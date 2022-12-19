import { PRODUCT } from "./product.type";

export type ORDER = {
  _id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  landmark: string;
  totalPrice: number;
  items: PRODUCT[];
  status?: string;
};
