import { GetCategoryDetailsRequestError } from "../types/categories-types";

export const createErrorMessage = (evaluatedRequest: GetCategoryDetailsRequestError) => {
  if (evaluatedRequest.error === "MissingCategoryId")
    return "parameter 'category_id' in category/details/'category_id' is missing";
  return "category/details/'category_id' must be a number";
};
