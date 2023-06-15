import { RouteRecordRaw } from "vue-router";

export type LayoutsTypes = "app-layout";

export type Route = RouteRecordRaw & {
  meta: {
    layout: LayoutsTypes;
  };
};

export type NonEmptyArray<T> = [T, ...T[]];

export interface NavRoute {
  name: string;
  icon: string;
  text: string;
  children?: NonEmptyArray<NavRoute>;
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
      {
        name: "contributors",
        icon: "mdi-account-group",
        text: "Contributors",
      },
    ],
  },
  {
    name: "personal-data",
    icon: "mdi-account",
    text: "Personal Data",
    children: [
      {
        name: "contact",
        icon: "mdi-phone",
        text: "Contact",
      },
    ],
  },
];
