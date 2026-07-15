import { HomePageContent } from "@/components/pages/home/home-page-content";
import { updateTitle } from "@/lib/util/update-title";

export const HomePage = () => {
	updateTitle("Home");

	return <HomePageContent />;
};
