import logger from "../../services/logger";
import { ResolverContext } from "./types/context-resolver-types";

export const testPerformance = (prevTimestamp?: Date) => {
  const currentTime = new Date();

  const isPrevTimestampDefined = !!prevTimestamp;
  if(isPrevTimestampDefined) {
    const diffTime = Math.abs(prevTimestamp.getTime() - currentTime.getTime());
    return diffTime;
  }

  return currentTime;
};

export const checkResolverPerformance = async (context: ResolverContext, resolverCallback: Function) => {
  const result = await resolverCallback();
  const logObject = {
    ...context.requestBody,
    result,
    queryTime: `${testPerformance(context.currentTime)} ms`
  };
  logger.info(JSON.stringify(logObject));

  const isQueryDataPresent = result.queryData !== undefined;
  if(isQueryDataPresent) return result.queryData;
  return result;
};