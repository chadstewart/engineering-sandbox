import * as zod from "zod/mini";

const projectDataObjectBase = zod.object({
	title: zod.string(),
	subTitle: zod.string(),
	imageLocation: zod.string(),
	description: zod.string(),
	githubAddress: zod.string(),
});

export const projectDataSchema = zod.array(projectDataObjectBase);

type projectDataSchemaBaseType = zod.infer<typeof projectDataObjectBase>;

interface projectDataSchemaIdType extends projectDataSchemaBaseType {
	id: number;
}

export type projectDataSchemaType = projectDataSchemaIdType[];
