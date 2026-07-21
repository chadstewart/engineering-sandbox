import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const ShowcasePageContent = () => (
	<>
		<div className="p-2 flex gap-2">
			<Link to="/" className="[&.active]:font-bold">
				Home
			</Link>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
		<hr />
		<TanStackRouterDevtools />
	</>
);
