import { Route } from "@/types/routes";

const routes: Route[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./views/DashboardView.vue"),
    meta: {
      layout: "admin-layout",
    },
  },
];

export default routes;
