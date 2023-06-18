import { RouteRecordRaw } from "vue-router";
import { LayoutsTypes } from "./layouts";

export type Route = RouteRecordRaw & {
  meta: {
    layout: LayoutsTypes;
    transitionName?: string;
  };
};

export type NonEmptyArray<T> = [T, ...T[]];
