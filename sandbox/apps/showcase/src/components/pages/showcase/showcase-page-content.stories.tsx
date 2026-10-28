import type { projectDataSchemaType } from "../../../lib/types/project-data-types";
import { ShowcasePageContent } from "./showcase-page-content";

const storyConfig = {
	title: "Showcase Project/Pages/Showcase",
};

const projectData: projectDataSchemaType = [
	{
		id: 1,
		title: "Test Title",
		subTitle: "Test Subtitle",
		imageLocation: "Test Location",
		description: "Test Desc",
		githubAddress: "Test Git Addy",
	},
	{
		id: 2,
		title: "Test Title 2",
		subTitle: "Test Subtitle 2",
		imageLocation: "Test Location 2",
		description: "Test Desc 2",
		githubAddress: "Test Git Addy 2",
	},
	{
		id: 3,
		title: "Test Title 3",
		subTitle: "Test Subtitle 3",
		imageLocation: "Test Location 3",
		liveAddress: "Test Live Addy",
		description: "Test Desc 3",
		githubAddress: "Test Git Addy 3",
	},
	{
		id: 4,
		title: "Test Title 4",
		subTitle: "Test Subtitle 4",
		imageLocation: "Test Location 4",
		description: "Test Desc 4",
		githubAddress: "Test Git Addy 4",
	},
];

export default storyConfig;

export const ShowcaseStory = () => (
	<ShowcasePageContent projectData={projectData} />
);
