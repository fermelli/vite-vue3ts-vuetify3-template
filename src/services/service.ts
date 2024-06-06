import axios, { AxiosError, AxiosResponse, HttpStatusCode, InternalAxiosRequestConfig } from "axios";
import { accept, baseURL, contentType, errorNetworkCode } from "@/config";
import useAuthStore from "@/store/modules/auth.store";
import { toast } from "vue3-toastify";

const service = axios.create({
  baseURL,
  headers: {
    "Content-Type": contentType,
    Accept: accept,
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
    if (response.status === HttpStatusCode.Ok) {
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
