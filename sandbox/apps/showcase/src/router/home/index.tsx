import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "../router";

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: lazyRouteComponent(
		() => import("@/components/pages/home"),
		"HomePage",
	),
});
