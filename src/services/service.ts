import axios from "axios";
import { baseURL, contentType, timeout } from "@/config";

const service = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": contentType,
  },
});

export default service;
