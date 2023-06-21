import { Route } from "@/types/routes";

const routes: Route[] = [
  {
    path: "/personal-data/contact",
    name: "contact",
    component: () => import("./views/ContactView.vue"),
    meta: {
      layout: "admin-layout",
    },
  },
  {
    path: "/personal-data/user-profile",
    name: "user-profile",
    component: () => import("./views/UserProfileView.vue"),
    meta: {
      layout: "admin-layout",
    },
  },
];

export default routes;
