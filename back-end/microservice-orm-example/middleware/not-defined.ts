import { NextFunction, Request, Response } from "express";

export default function notDefined(req: Request, res: Response, next: NextFunction) {
  const { path } = req;

  const isNotValidRoute = path !== "/" && !path.includes("/v1");
  if (isNotValidRoute) {
    return res.status(405).json({
      success: false,
      message: "The route you tried to access is not defined"
    });
  }
  next();
}
