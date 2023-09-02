import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { baseURL, contentType, timeout, errorNetworkCode } from "@/config";
import useAuthStore from "@/store/modules/auth.store";

const service = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": contentType,
  },
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const authStore = useAuthStore();
    const accessToken = authStore.getAccessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

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
