import { Request, Response, NextFunction } from "express";
import { handleUsStatesRequest } from "./util/handle-us-states-request";
import { parseUsStatesRequest } from "./util/parse-us-states-request";
import { usStates } from "../../../models/us-states";
import { UsStatesParams } from "./util/types/us-states-types";

export async function getUSStates(req: Request<UsStatesParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleUsStatesRequest(parseUsStatesRequest(req), usStates, req.path);
  const usStatesResponse = rest;
  res.status(statusCode).json(usStatesResponse);
  return next();
}
