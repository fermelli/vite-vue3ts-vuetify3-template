import { NonEmptyArray } from "@/types/routes.type";
import { RouteLocationRaw } from "vue-router";

export interface NavRoute {
  to: RouteLocationRaw;
  icon: string;
  text: string;
  children?: NonEmptyArray<NavRoute>;
}
