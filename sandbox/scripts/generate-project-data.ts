import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
	projectDataSchema,
	type projectDataSchemaBaseType,
	showcaseSchema,
} from "@engineering-sandbox/project-data/project-data-types";

const SHOWCASE_FILE_NAME = "showcase.json";

const sandboxRoot = path.resolve(import.meta.dirname, "..");
const projectsDir = path.join(sandboxRoot, "apps/projects");
const outputFile = path.join(
	sandboxRoot,
	"packages/project-data/generated/project-data.json",
);

const getProjectNames = async () => {
	const entries = await readdir(projectsDir, { withFileTypes: true });

	return entries
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.sort();
};

const readShowcaseFile = async (projectName: string) => {
	const showcaseFilePath = path.join(
		projectsDir,
		projectName,
		SHOWCASE_FILE_NAME,
	);

	let fileContents: string;
	try {
		fileContents = await readFile(showcaseFilePath, "utf8");
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			throw new Error(`${projectName}: missing ${SHOWCASE_FILE_NAME}`);
		}
		throw error;
	}

	let json: unknown;
	try {
		json = JSON.parse(fileContents);
	} catch (error) {
		throw new Error(
			`${projectName}: invalid JSON in ${SHOWCASE_FILE_NAME}\n  ${(error as Error).message}`,
		);
	}

	const result = showcaseSchema.safeParse(json);
	if (!result.success) {
		const issues = result.error.issues
			.map(
				(issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`,
			)
			.join("\n");
		throw new Error(`${projectName}: invalid ${SHOWCASE_FILE_NAME}\n${issues}`);
	}

	return result.data;
};

const writeIfChanged = async (filePath: string, contents: string) => {
	const existingContents = await readFile(filePath, "utf8").catch(() => null);
	if (existingContents === contents) return false;

	await mkdir(path.dirname(filePath), { recursive: true });
	await writeFile(filePath, contents);
	return true;
};

const generateProjectData = async () => {
	const projectNames = await getProjectNames();

	const errors: string[] = [];
	const readyProjects: projectDataSchemaBaseType[] = [];

	for (const projectName of projectNames) {
		try {
			const { ready, ...projectData } = await readShowcaseFile(projectName);
			if (ready) readyProjects.push(projectData);
		} catch (error) {
			errors.push((error as Error).message);
		}
	}

	if (errors.length > 0) {
		console.error(
			`Failed to generate project data (${errors.length} project(s) with errors):\n\n${errors.join("\n\n")}`,
		);
		process.exit(1);
	}

	const projectData = projectDataSchema.parse(readyProjects);
	const didWrite = await writeIfChanged(
		outputFile,
		`${JSON.stringify(projectData, null, "\t")}\n`,
	);

	console.log(
		`${readyProjects.length} of ${projectNames.length} project(s) ready. ${didWrite ? "Wrote" : "No changes to"} ${path.relative(sandboxRoot, outputFile)}`,
	);
};

await generateProjectData();
