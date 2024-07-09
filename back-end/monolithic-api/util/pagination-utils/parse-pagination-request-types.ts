export type PaginationRequestError = {
  error: "MissingPage" | "PageIsNotAValidNumber";
};
export type PaginationRequest = {
  page: number;
};

export type PaginationParams = {
  page: string;
};
