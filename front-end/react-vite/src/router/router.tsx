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

const componentTestRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/orders",
  component: Orders
});

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([indexRoute, catRoute, aboutRoute, architectureRoute, componentTestRoute])
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
