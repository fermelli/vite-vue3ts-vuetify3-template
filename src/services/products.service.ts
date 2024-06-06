import { Product } from "@/interfaces/product.interface";
import service from "./service";

const get = async () => {
  return await service.get<Product[]>("/products");
};

export default {
  get,
};
