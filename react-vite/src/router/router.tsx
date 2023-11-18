import { Router, RootRoute, Route } from "@tanstack/react-router";
import Test from "@/components/pages/test";
import Test2 from "@/components/pages/test2";
import { MainLayout } from "@/components/templates/layout/main";

const rootRoute = new RootRoute({
  component: MainLayout
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Test
})

const secondPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/2",
  component: Test2
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  secondPageRoute
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router;