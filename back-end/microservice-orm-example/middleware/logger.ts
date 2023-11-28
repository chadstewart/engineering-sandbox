import { Request, Response } from "express";
import logger from "../services/logger";

export default function serverLogger (req: Request, res: Response) {
    const { rawHeaders, httpVersion, method, body, url, params } = req;
    const headers = res.getHeaders();
    const { statusCode, locals: { totalRequestTime } } = res;

    logger.info(JSON.stringify({
        test: "test"
    }));

    const isStatusCodeIn200Range = 200 <= statusCode && statusCode < 300;

    if(isStatusCodeIn200Range) {
        logger.info(JSON.stringify({
            headers,
            statusCode,
            body,
            requestTime: `${totalRequestTime} ms`
        }));
    } else {
        logger.warn(JSON.stringify({
            headers,
            statusCode
        }));
    }
};