import { Request, Response } from "express";
import logger from "../services/logger";

export default function serverLogger(req: Request, res: Response) {
  const { body } = req;
  const headers = res.getHeaders();
  const { statusCode } = res;

  const isStatusCodeIn200Range = 200 <= statusCode && statusCode < 300;

  if (isStatusCodeIn200Range) {
    logger.info(
      JSON.stringify({
        headers,
        statusCode,
        body
      })
    );
  } else {
    logger.warn(
      JSON.stringify({
        headers,
        statusCode
      })
    );
  }
}
