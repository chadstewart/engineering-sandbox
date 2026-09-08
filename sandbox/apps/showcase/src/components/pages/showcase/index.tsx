import { ShowcasePageContent } from "@/components/pages/showcase/showcase-page-content";
import { updateTitle } from "@/lib/util/update-title";
import { handleProjectData } from "@/services/handle-project-data";

export const ShowcasePage = () => {
	updateTitle("Showcase");
	const data = handleProjectData();

	return <ShowcasePageContent projectData={data} />;
};
