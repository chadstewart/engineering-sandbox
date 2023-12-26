import { Router, RootRoute, Route } from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import CuteAnimals from "@/components/pages/cute-animals";
import About from "@/components/pages/about";
import Home from "@/components/pages/home";
import Architecture from "@/components/pages/architecture";
import { Orders } from "@/components/pages/orders";

const rootRoute = new RootRoute({
  component: MainLayout
});

const pageLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: PageLayout,
  id: "pageLayout"
});

const indexRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/",
  component: Home
});

const catRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/cat",
  component: CuteAnimals
});

const aboutRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/about",
  component: About
});

const architectureRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/architecture",
  component: Architecture
});

const ordersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/orders"
});

const orderDetailsRoute = new Route({
  getParentRoute: () => ordersRoute,
  path: "/details",
  component: Orders
});

export const ordersPageRoute = new Route({
  getParentRoute: () => orderDetailsRoute,
  path: "/$page"
});

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([
    indexRoute,
    catRoute,
    aboutRoute,
    architectureRoute,
    ordersRoute.addChildren([orderDetailsRoute.addChildren([ordersPageRoute])])
  ])
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
