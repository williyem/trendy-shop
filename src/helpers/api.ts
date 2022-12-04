import axios from "axios";
import { baseUrl } from "./urls";

// interface IProp {
//   url: string;
//   method: string;
//   body?: any;
//   headers?: any;
// }

export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: "Bearer ",
  },
});

export const apiAxios = axios.create({
  baseURL: baseUrl,
});
