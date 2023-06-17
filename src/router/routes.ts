import homeRoutes from "@/modules/pages/home/routes";
import productosRoutes from "@/modules/pages/productos/routes";
import adminDashboardRoutes from "@/modules/admin/dashboard/routes";
import adminInfoRoutes from "@/modules/admin/info/routes";
import adminPersonalDataRoutes from "@/modules/admin/personal-data/routes";
import { Route } from "@/types/routes";

const routes: Route[] = [
  ...homeRoutes,
  ...productosRoutes,
  ...adminDashboardRoutes,
  ...adminInfoRoutes,
  ...adminPersonalDataRoutes,
];

export default routes;
