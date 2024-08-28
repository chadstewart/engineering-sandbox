import { Request } from "express";
import { AddEmployeeEvaluatedRequest, AddEmployeeRequestBody } from "../types/employee-types";
import { createEmployeeZodSchema } from "../../../../../util/schemas/employee-zod-schema";

type emptyObject = Record<string, never>;

export const parseAddEmployeeRequest = (
  req: Request<emptyObject, emptyObject, AddEmployeeRequestBody>
): AddEmployeeEvaluatedRequest => {
  try {
    const data = createEmployeeZodSchema.parse(req.body);
    return data;
  } catch {
    return { error: "MissingParams" };
  }
};
