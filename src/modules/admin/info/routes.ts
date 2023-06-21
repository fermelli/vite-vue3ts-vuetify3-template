import { Route } from "@/types/routes.type";

const routes: Route[] = [
  {
    path: "/info/about",
    name: "about",
    component: () => import("./views/AboutView.vue"),
    meta: {
      layout: "admin-layout",
    },
  },
  {
    path: "/info/contributors",
    name: "contributors",
    component: () => import("./views/ContributorsView.vue"),
    meta: {
      layout: "admin-layout",
    },
  },
];

export default routes;
