import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const ordersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/orders"
});

export const orderDetailsRoute = new Route({
  getParentRoute: () => ordersRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/orders"))
});

export const ordersPageRoute = new Route({
  getParentRoute: () => orderDetailsRoute,
  path: "/$page"
});
