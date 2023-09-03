import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { baseURL, contentType, timeout, errorNetworkCode, okCode } from "@/config";
import useAuthStore from "@/store/modules/auth.store";
import { toast } from "vue3-toastify";

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
    if (response.status === okCode) {
      toast.success(response.statusText);
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.code === errorNetworkCode) {
      toast.error(error.message);
    }

    return Promise.reject(error);
  },
);

export default service;
