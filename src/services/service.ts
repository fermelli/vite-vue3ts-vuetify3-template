import axios, { AxiosError, AxiosResponse } from "axios";
import { baseURL, contentType, timeout, errorNetworkCode } from "@/config";

const service = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": contentType,
  },
});

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.code === errorNetworkCode) {
      console.log(error.message);
    }

    return Promise.reject(error);
  },
);

export default service;
