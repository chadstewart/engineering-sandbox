import { ROW_LIMIT } from "./row-limit";

export const prismaPaginationHelper = (pageNumber = 1, inputtedRowLimit = ROW_LIMIT) => {
  const offsetForQuery = (pageNumber * inputtedRowLimit) - inputtedRowLimit;
  return {
    skip: offsetForQuery,
    take: inputtedRowLimit
  };
};