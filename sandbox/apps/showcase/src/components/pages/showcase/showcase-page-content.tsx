import type { projectDataSchemaType } from "../../../lib/types/project-data-types";

type ShowcasePageContentProps = {
	projectData: projectDataSchemaType;
};

export const ShowcasePageContent = ({ projectData }: ShowcasePageContentProps) => (
	<>
		<div className="p-2 flex gap-2">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
		<hr />
	</>
);
