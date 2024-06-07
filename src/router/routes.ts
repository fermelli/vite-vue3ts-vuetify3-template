import homeRoutes from "@/modules/pages/home/routes";
import productsRoutes from "@/modules/pages/products/routes";
import adminDashboardRoutes from "@/modules/admin/dashboard/routes";
import adminInfoRoutes from "@/modules/admin/info/routes";
import adminPersonalDataRoutes from "@/modules/admin/personal-data/routes";
import notFoundRoutes from "@/modules/pages/not-found/routes";
import { Route } from "@/types/routes.type";

const routes: Route[] = [
  ...homeRoutes,
  ...productsRoutes,
  ...adminDashboardRoutes,
  ...adminInfoRoutes,
  ...adminPersonalDataRoutes,
  ...notFoundRoutes,
];

export default routes;
