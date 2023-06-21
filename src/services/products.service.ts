import { ProductInterface } from "@/interfaces/product.interface";
import service from "./service";

const get = () => {
  return service.get<ProductInterface[]>("/products");
};

export default {
  get,
};
