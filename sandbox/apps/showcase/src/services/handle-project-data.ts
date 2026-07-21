import * as zod from "zod/mini";
import {
	projectDataSchema,
	type projectDataSchemaType,
} from "@/lib/types/project-data-types";
import jsonFileData from "@/project-data/project-data.json";

export const handleProjectData = () => {
	return parseProjectData(jsonFileData);
};

const parseProjectData = (dataFromJsonFile: unknown): projectDataSchemaType => {
	let result: projectDataSchemaType | [] = [];

	try {
		const parsedData = zod.parse(projectDataSchema, dataFromJsonFile);
		result = parsedData;
	} catch (error) {
		handleParseProjectDataError(error);
	}

	return result;
};

const handleParseProjectDataError = (error: unknown) => {
	console.log("Fuck... ", error);
};
