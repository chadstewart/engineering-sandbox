import { ShowcasePageContent } from "@/components/pages/showcase/showcase-page-content";
import { updateTitle } from "@/lib/util/update-title";

export const ShowcasePage = () => {
	updateTitle("Showcase");

	return <ShowcasePageContent />;
};
