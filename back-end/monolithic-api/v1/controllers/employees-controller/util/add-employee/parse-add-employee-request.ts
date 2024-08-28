import { Request } from "express";
import { AddEmployeeEvaluatedRequest, AddEmployeeParams } from "../types/employee-types";
import { createEmployeeZodSchema } from "../../../../../util/schemas/employee-zod-schema";

export const parseAddEmployeeRequest = (req: Request<AddEmployeeParams>): AddEmployeeEvaluatedRequest => {
  try {
    const data = createEmployeeZodSchema.parse(req.params);
    return data;
  } catch {
    return { error: "MissingParams" };
  }
};
