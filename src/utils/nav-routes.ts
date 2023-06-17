import { NavRoute } from "@/types/routes";

const navRoutes: NavRoute[] = [
  {
    name: "dashboard",
    icon: "mdi-dashboard",
    text: "Dashboard",
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

export default navRoutes;
