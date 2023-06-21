import { Route } from "@/types/routes.type";

const routes: Route[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomeView.vue"),
    meta: {
      layout: "page-layout",
    },
  },
];

export default routes;
