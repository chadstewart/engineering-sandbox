import { app } from "../app";
import sls from "serverless-http";

export const lambda = sls(app);
