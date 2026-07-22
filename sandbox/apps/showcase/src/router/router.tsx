import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/layout/main";
import { PageLayout } from "@/components/templates/layout/page";
import { aboutRoute } from "./about";
import { homeRoute } from "./home";
import { notFoundRoute } from "./not-found/not-found";
import { showcaseRoute } from "./showcase";

export const rootRoute = createRootRoute({
	component: MainLayout,
});

export const pageLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	component: PageLayout,
	id: "pageLayout",
});

const routeTree = rootRoute.addChildren([
	pageLayoutRoute.addChildren([homeRoute, aboutRoute, showcaseRoute]),
]);

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: notFoundRoute,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default router;
