import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "../router";

export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: lazyRouteComponent(() => import("@/components/pages/home")),
});
