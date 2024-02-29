import { app } from "../app";
import sls from "serverless-http";

module.exports.lambdaFunction = sls(app);
