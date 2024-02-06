import { Route, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { pageLayoutRoute } from "../router";

export const customersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/customers"
});

export const customerDetailsRoute = new Route({
  getParentRoute: () => customersRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/customers/details"))
});

export const customersPageRoute = new Route({
  getParentRoute: () => customerDetailsRoute,
  path: "/$page"
});

export const customerAddCustomer = new Route({
  getParentRoute: () => customersRoute,
  path: "/add-customer",
  component: lazyRouteComponent(() => import("@/components/pages/customers/add_customer")),
  beforeLoad: ({ location, context }) => {
    if (!context.isAuthenticated)
      throw redirect({
        to: "/",
        search: {
          redirect: location.href
        }
      });
  }
});

export const customersRouteTree = customersRoute.addChildren([
  customerAddCustomer,
  customerDetailsRoute.addChildren([customersPageRoute])
]);
