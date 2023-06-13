import { RouteRecordRaw } from "vue-router";

export type LayoutsTypes = "app-layout";

export type Route = RouteRecordRaw & {
  meta: {
    layout: LayoutsTypes;
  };
};

export interface NavRoute {
  name: string;
  icon: string;
  text: string;
  children?: NavRoute[];
}

export const navRoutes: NavRoute[] = [
  {
    name: "home",
    icon: "mdi-home",
    text: "Home",
  },
  {
    name: "info",
    icon: "mdi-information",
    text: "Info",
    children: [
      {
        name: "about",
        icon: "mdi-information-outline",
        text: "About",
      },
    ],
  },
];
