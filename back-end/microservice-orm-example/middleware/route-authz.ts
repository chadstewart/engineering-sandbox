import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";

export default async function routeAuth(req: Request, res: Response, next: NextFunction) {
  const indexRoute = req.path === "/" && req.method === "GET";

  if (indexRoute) return next();

  const checkJwt = auth({
    audience: `${process.env.AUTH0_AUDIENCE_URL}`,
    issuerBaseURL: `https://${process.env.AUTH0_URL}`,
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
}
