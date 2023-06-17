import { Route } from "@/utils";

const routes: Route[] = [
  {
    path: "/personal-data/contact",
    name: "contact",
    component: () => import("./views/ContactView.vue"),
    meta: {
      layout: "app-layout",
    },
  },
];

export default routes;
