import { Router } from "@tanstack/react-router";
import { notFoundRoute } from "./not-found/not-found";
import {
  createRoute,
  createRootRoute
} from '@tanstack/react-router'
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import { indexRoute } from "./index";

export const rootRoute = createRootRoute({
  component: MainLayout
});

export const pageLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: PageLayout,
  id: "pageLayout"
});

const routeTree = rootRoute.addChildren([
  pageLayoutRoute.addChildren([
    indexRoute
  ])
]);

const router = new Router({
  routeTree,
  notFoundRoute
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;