import { Router, RootRoute, Route } from "@tanstack/react-router";
import Test2 from "@/components/pages/test2";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import CuteAnimals from "@/components/pages/cute-animals";
import About from "@/components/pages/about";
import Home from "@/components/pages/home";

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

const secondPageRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/2",
  component: Test2
});

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([indexRoute, catRoute, aboutRoute, secondPageRoute])
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
