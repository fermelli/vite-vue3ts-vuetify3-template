import { NavRoute } from "@/interfaces/nav-route";

const navRoutes: NavRoute[] = [
  {
    to: { name: "dashboard" },
    icon: "mdi-view-dashboard",
    text: "Dashboard",
  },
  {
    to: { name: "info" },
    icon: "mdi-information",
    text: "Info",
    children: [
      {
        to: { name: "about" },
        icon: "mdi-information-outline",
        text: "About",
      },
      {
        to: { name: "contributors" },
        icon: "mdi-account-group",
        text: "Contributors",
      },
    ],
  },
  {
    to: { name: "personal-data" },
    icon: "mdi-account",
    text: "Personal Data",
    children: [
      {
        to: { name: "contact" },
        icon: "mdi-phone",
        text: "Contact",
      },
    ],
  },
];

export default navRoutes;
