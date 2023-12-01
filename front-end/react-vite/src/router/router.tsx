import { Router, RootRoute, Route } from "@tanstack/react-router";
import Test from "@/components/pages/test";
import Test2 from "@/components/pages/test2";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import CuteAnimals from "@/components/pages/cute-animals";

const rootRoute = new RootRoute({
  component: MainLayout
});

const pageLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  component: PageLayout,
  id: "pageLayout",
})

const indexRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/",
  component: Test
})

const catRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/cat",
  component: CuteAnimals,
});

const secondPageRoute = new Route({
  getParentRoute: () => pageLayoutRoute,
  path: "/2",
  component: Test2
})

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([
    indexRoute,
    catRoute,
    secondPageRoute
  ])
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router;