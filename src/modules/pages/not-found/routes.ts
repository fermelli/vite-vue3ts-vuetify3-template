import { Route } from "@/types/routes.type";

const routes: Route[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./views/NotFoundView.vue"),
    meta: {
      layout: "blank-layout",
    },
  },
];

export default routes;
