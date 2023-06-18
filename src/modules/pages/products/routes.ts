import { Route } from "@/types/routes";

const routes: Route[] = [
  {
    path: "/products",
    name: "products",
    component: () => import("./views/ProductsView.vue"),
    meta: {
      layout: "page-layout",
    },
  },
  {
    path: "/products/:category",
    name: "product-category",
    component: () => import("./views/ProductCategoryView.vue"),
    props: true,
    meta: {
      layout: "page-layout",
    },
  },
];

export default routes;
