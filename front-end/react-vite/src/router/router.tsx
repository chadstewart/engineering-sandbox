import { Router, RootRoute, Route } from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import { indexRoute } from "./index";
import { notFoundRoute } from "./not-found/not-found";
import { catRoute } from "./cat";
import { aboutRoute } from "./about";
import { architectureRoute } from "./architecture";
import { orderDetailsRoute, ordersPageRoute, ordersRoute } from "./orders";
import { productDetailsRoute, productsPageRoute, productsRoute } from "./products";
import { customerDetailsRoute, customersPageRoute, customersRoute } from "./customers";

export const rootRoute = new RootRoute({
  component: MainLayout
});

export const pageLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: PageLayout,
  id: "pageLayout"
});

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([
    indexRoute,
    catRoute,
    aboutRoute,
    architectureRoute,
    ordersRoute.addChildren([orderDetailsRoute.addChildren([ordersPageRoute])]),
    productsRoute.addChildren([productDetailsRoute.addChildren([productsPageRoute])]),
    customersRoute.addChildren([customerDetailsRoute.addChildren([customersPageRoute])])
  ])
]);

const router = new Router({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
