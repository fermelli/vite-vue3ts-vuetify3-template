import { Route } from "@/types/routes";

const routes: Route[] = [
  {
    path: "/productos",
    name: "productos",
    component: () => import("./views/ProductosView.vue"),
    meta: {
      layout: "page-layout",
    },
  },
  {
    path: "/productos/:id",
    name: "producto",
    component: () => import("./views/ProductoView.vue"),
    props: true,
    meta: {
      layout: "page-layout",
    },
  },
];

export default routes;
