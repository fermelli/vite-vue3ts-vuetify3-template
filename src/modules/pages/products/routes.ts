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
    path: "/products/:id",
    name: "product",
    component: () => import("./views/ProductView.vue"),
    props: true,
    meta: {
      layout: "page-layout",
    },
  },
];

export default routes;
