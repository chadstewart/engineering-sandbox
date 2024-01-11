import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const cuteAnimalsRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/cute-animals",
  component: lazyRouteComponent(() => import("@/components/pages/cute-animals"))
});
