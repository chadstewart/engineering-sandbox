import { createRootRoute, createRoute, Router } from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import { aboutRoute } from "./about";
import { homeRoute } from "./home";
import { notFoundRoute } from "./not-found/not-found";

export const rootRoute = createRootRoute({
	component: MainLayout,
});

export const pageLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	component: PageLayout,
	id: "pageLayout",
});

const routeTree = rootRoute.addChildren([
	pageLayoutRoute.addChildren([homeRoute, aboutRoute]),
]);

const router = new Router({
	routeTree,
	notFoundRoute,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default router;
