import { NavRoute } from "@/interfaces/nav-route.interface";

const navBarMenuItems: NavRoute[] = [
  {
    to: { name: "home" },
    icon: "mdi-home",
    text: "Home",
  },
  {
    to: { name: "products" },
    icon: "mdi-package-variant-closed",
    text: "Products",
    children: [
      {
        to: { name: "products" },
        icon: "mdi-package-variant-closed",
        text: "Products",
      },
      {
        to: { name: "product-category", params: { category: "consumer-electronics" } },
        icon: "mdi-lightning-bolt-circle",
        text: "Consumer Electronics",
      },
    ],
  },
];

export default navBarMenuItems;
