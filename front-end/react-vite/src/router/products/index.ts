import { Route, lazyRouteComponent } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const productsRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/products"
});

export const productDetailsRoute = new Route({
  getParentRoute: () => productsRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/products"))
});

export const productsPageRoute = new Route({
  getParentRoute: () => productDetailsRoute,
  path: "/$page"
});
