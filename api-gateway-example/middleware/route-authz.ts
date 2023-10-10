import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";

export default async function routeAuth (req: Request, res: Response, next: NextFunction) {
  const indexRoute = req.path === "/" && req.method === "GET";
  const authRoute = req.path === "/v1/auth/token";
  
  if (indexRoute) return next();
  if (authRoute) return next();

  const checkJwt = auth({
    audience: 'https://api-gateway-fun.com',
    issuerBaseURL: 'https://dev-shyos663p2j8yo8b.us.auth0.com/',
    tokenSigningAlg: 'RS256'
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