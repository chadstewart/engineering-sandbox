import { Route, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const ordersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/orders"
});

export const orderDetailsRoute = new Route({
  getParentRoute: () => ordersRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/orders/"))
});

export const ordersPageRoute = new Route({
  getParentRoute: () => orderDetailsRoute,
  path: "/$page"
});

export const orderTestProtected = new Route({
  getParentRoute: () => ordersRoute,
  path: "/protected-route",
  component: lazyRouteComponent(() => import("@/components/pages/testing/")),
  beforeLoad: ({ location, context }) => {
    if (context.isAuthenticated)
      throw redirect({
        to: "/",
        search: {
          redirect: location.href
        }
      });
  }
});

export const ordersRouteTree = ordersRoute.addChildren([
  orderTestProtected,
  orderDetailsRoute.addChildren([ordersPageRoute])
]);
