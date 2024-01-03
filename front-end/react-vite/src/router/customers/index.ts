import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const customersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/customers"
});

export const customerDetailsRoute = new Route({
  getParentRoute: () => customersRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/customers"))
});

export const customersPageRoute = new Route({
  getParentRoute: () => customerDetailsRoute,
  path: "/$page"
});

export const customersRouteTree = customersRoute.addChildren([customerDetailsRoute.addChildren([customersPageRoute])]);
