import * as zod from "zod/mini";
import { projectDataSchema } from "../lib/types/project-data-types";
import jsonFileData from "../project-data/project-data.json";

export const handleProjectData = () => {
	return parseProjectData(jsonFileData);
};

const parseProjectData = (dataFromJsonFile: unknown) => {
	let counter = 0;
	let result = [];

	try {
		const parsedData = zod.parse(projectDataSchema, dataFromJsonFile);
		const mappedArray = parsedData.map((entity) => {
			return { ...entity, id: counter++ };
		});
		result = mappedArray;
		return result;
	} catch (error) {
		handleParseProjectDataError(error);
	}

	return [];
};

const handleParseProjectDataError = (error: unknown) => {
	console.log("Fuck... ", error);
};
