import * as zod from "zod/mini";

export const projectDataSchema = zod.array(
	zod.object({
		title: zod.string(),
		subTitle: zod.string(),
		imageLocation: zod.string(),
		description: zod.string(),
		githubAddress: zod.string(),
	}),
);

export type projectDataSchemaType = zod.infer<typeof projectDataSchema>;
