import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const indexRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/",
  component: lazyRouteComponent(() => import("@/components/pages/home/"))
});
