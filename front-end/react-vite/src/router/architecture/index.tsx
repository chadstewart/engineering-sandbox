import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const architectureRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/architecture",
  component: lazyRouteComponent(() => import("@/components/pages/architecture/"))
});
