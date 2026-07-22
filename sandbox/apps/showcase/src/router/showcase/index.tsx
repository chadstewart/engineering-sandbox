import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "../router";

export const showcaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/showcase",
	component: lazyRouteComponent(
		() => import("@/components/pages/showcase"),
		"ShowcasePage",
	),
});
