import { AboutPageContent } from "@/components/pages/about/about-page-content";
import { updateTitle } from "@/lib/util/update-title";

export const AboutPage = () => {
	updateTitle("About");

	return <AboutPageContent />;
};
