import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";

export default async function routeAuth (req: Request, res: Response, next: NextFunction) {
  const indexRoute = req.path === "/" && req.method === "GET";
  const authRoute = req.path === "/v1/auth/token";
  
  if (indexRoute) return next();
  if (authRoute) return next();

  const checkJwt = auth({
    audience: `${process.env.AUTH0_AUDIENCE_URL}`,
    issuerBaseURL: `${process.env.AUTH0_URL}`,
    tokenSigningAlg: `${process.env.AUTH0_SIGNING_ALG}`
  });

  checkJwt(req, res, (err) => {
    if (err) {
      return res.status(401).json({
        data: {
          status: "unauthorized"
        }
      });
    }

    next();
  });
};