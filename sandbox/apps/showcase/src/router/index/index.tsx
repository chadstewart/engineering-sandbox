import { createRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import App from "@/App";
import { rootRoute } from "../router";

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: function Index() {
		return (
			<>
				<div className="p-2 flex gap-2">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</div>
				<hr />
				<App />
				<TanStackRouterDevtools />
			</>
		);
	},
});
