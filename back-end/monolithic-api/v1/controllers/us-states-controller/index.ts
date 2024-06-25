import { Request, Response, NextFunction } from "express";
import { handleUsStatesRequest } from "./handle-us-states-request";
import { parseUsStatesRequest } from "./parse-us-states-request";
import { usStates } from "../../../models/us-states";

export async function getUSStates(req: Request, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleUsStatesRequest(parseUsStatesRequest(req), usStates);
  const usStatesResponse = rest;
  res.status(statusCode).json(usStatesResponse);
  return next();
}
