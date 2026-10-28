import type { projectDataSchemaType } from "../../../lib/types/project-data-types";
import { ShowcaseCard } from "../../molecules/showcase-card";

type ShowcasePageContentProps = {
	projectData: projectDataSchemaType;
};

export const ShowcasePageContent = ({
	projectData,
}: ShowcasePageContentProps) => (
	<>
		<div className="p-2 flex flex-wrap gap-4">
			{projectData.map((project) => (
				<ShowcaseCard
					key={project.id}
					title={project.title}
					description={project.description}
					imageLocation={project.imageLocation}
					githubAddress={project.githubAddress}
				/>
			))}
		</div>
		<hr />
	</>
);
