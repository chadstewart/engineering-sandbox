import { describe, expect, it } from "vitest";
import { projectDataSchema, showcaseSchema } from "./project-data-types";

const validProject = {
	title: "Project",
	description: "A project",
	githubAddress: "https://github.com/example/project",
};

describe("showcaseSchema", () => {
	it("accepts a valid showcase entry", () => {
		const result = showcaseSchema.safeParse({ ...validProject, ready: true });
		expect(result.success).toBe(true);
	});

	it("rejects an entry missing `ready`", () => {
		expect(showcaseSchema.safeParse(validProject).success).toBe(false);
	});

	it("rejects an invalid githubAddress", () => {
		const result = showcaseSchema.safeParse({
			...validProject,
			githubAddress: "not-a-url",
			ready: true,
		});
		expect(result.success).toBe(false);
	});
});

describe("projectDataSchema", () => {
	it("accepts an array of projects with optional fields", () => {
		const result = projectDataSchema.safeParse([
			validProject,
			{
				...validProject,
				subTitle: "Sub",
				imageLocation: "/img.png",
				liveAddress: "https://example.com",
			},
		]);
		expect(result.success).toBe(true);
	});

	it("rejects a project missing required fields", () => {
		expect(projectDataSchema.safeParse([{ title: "x" }]).success).toBe(false);
	});
});
