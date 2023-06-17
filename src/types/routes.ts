import { RouteRecordRaw } from "vue-router";
import { LayoutsTypes } from "./layouts";

export type Route = RouteRecordRaw & {
  meta: {
    layout: LayoutsTypes;
    transitionName?: string;
  };
};

export type NonEmptyArray<T> = [T, ...T[]];

export interface NavRoute {
  name: string;
  icon: string;
  text: string;
  children?: NonEmptyArray<NavRoute>;
}
