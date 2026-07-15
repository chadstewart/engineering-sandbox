import { NotFoundContent } from "@/components/pages/not-found/not-found-page-content.tsx";
import { updateTitle } from "@/lib/util/update-title";

const NotFound = () => {
	updateTitle("404 | Not Found");

	return <NotFoundContent />;
};

export default NotFound;
