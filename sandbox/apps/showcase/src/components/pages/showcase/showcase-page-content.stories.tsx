import { handleProjectData } from "../../../services/handle-project-data";
import { ShowcasePageContent } from "./showcase-page-content";


const storyConfig = {
  title: "Showcase Project/Pages/Showcase"
};

const projectData = handleProjectData();

export default storyConfig;

export const ShowcaseStory = () => <ShowcasePageContent projectData={projectData} />;