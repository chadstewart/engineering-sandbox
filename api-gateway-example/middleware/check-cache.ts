import { Request, Response, NextFunction } from "express";
import { redis } from "../services/cache";

export default async function checkCache (req: Request, res: Response, next: NextFunction) {
  const endpoint = req.url;

  const cachedResponse = await redis.get(endpoint);

  if (cachedResponse) {
    const responseToUser = JSON.parse(cachedResponse);
    return res.status(200).json(responseToUser);
  }

  return next();
}