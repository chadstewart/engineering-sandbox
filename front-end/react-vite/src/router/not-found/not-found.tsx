import { NotFoundRoute } from "@tanstack/react-router";
import NotFound from "@/components/pages/not-found/";
import { rootRoute } from "../router";

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => NotFound()
});
