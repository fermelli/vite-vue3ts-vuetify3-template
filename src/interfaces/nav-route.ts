import { NonEmptyArray } from "@/types/routes";

export interface NavRoute {
  name: string;
  icon: string;
  text: string;
  children?: NonEmptyArray<NavRoute>;
}
