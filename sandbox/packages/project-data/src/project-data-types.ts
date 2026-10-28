import * as zod from "zod/mini";

const projectDataObjectBase = zod.object({
	title: zod.string(),
	subTitle: zod.optional(zod.string()),
	imageLocation: zod.optional(zod.string()),
	description: zod.string(),
	liveAddress: zod.optional(zod.url()),
	githubAddress: zod.url(),
});

const showcaseSchemaObjectBase = zod.extend(projectDataObjectBase, {
	ready: zod.boolean(),
});

export const showcaseSchema = showcaseSchemaObjectBase;

export const projectDataSchema = zod.array(projectDataObjectBase);

export type projectDataSchemaBaseType = zod.infer<typeof projectDataObjectBase>;

interface projectDataSchemaIdType extends projectDataSchemaBaseType {
	id: number;
}

export type projectDataSchemaType = projectDataSchemaIdType[];
