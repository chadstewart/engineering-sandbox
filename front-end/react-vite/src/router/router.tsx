import { Router, RootRoute, Route, NotFoundRoute } from "@tanstack/react-router";
import { lazyRouteComponent } from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import NotFound from "@/components/pages/not-found";

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
  component: lazyRouteComponent(() => import("@/components/pages/home"))
});

const catRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/cat",
  component: lazyRouteComponent(() => import("@/components/pages/cute-animals"))
});

const aboutRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("@/components/pages/about"))
});

const architectureRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/architecture",
  component: lazyRouteComponent(() => import("@/components/pages/architecture"))
});

const ordersRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/orders"
});

const orderDetailsRoute = new Route({
  getParentRoute: () => ordersRoute,
  path: "/details",
  component: lazyRouteComponent(() => import("@/components/pages/orders"))
});

export const ordersPageRoute = new Route({
  getParentRoute: () => orderDetailsRoute,
  path: "/$page"
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => NotFound()
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

const router = new Router({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
