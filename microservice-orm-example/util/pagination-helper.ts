import { ROW_LIMIT } from "./row-limit";

export const addPagination = (pageNumber = 1, inputtedRowLimit = ROW_LIMIT) => {
  const offsetForQuery = (pageNumber * inputtedRowLimit) - inputtedRowLimit;
  const query = " " + `LIMIT ${inputtedRowLimit} OFFSET ${offsetForQuery}`;
  return query;
};

export const prismaPaginationHelper = (pageNumber = 1, inputtedRowLimit = ROW_LIMIT) => {
  const offsetForQuery = (pageNumber * inputtedRowLimit) - inputtedRowLimit;
  return {
    skip: offsetForQuery,
    take: inputtedRowLimit
  };
};