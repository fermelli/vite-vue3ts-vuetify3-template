import { Route } from "@/utils";
import { createRouter, createWebHistory } from "vue-router";

const routes: Route[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      layout: "app-layout",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      layout: "app-layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
