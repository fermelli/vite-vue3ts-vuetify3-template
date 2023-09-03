import { Product } from "@/interfaces/product.interface";
import service from "./service";

const get = () => {
  return service.get<Product[]>("/products");
};

export default {
  get,
};
