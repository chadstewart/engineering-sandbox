import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";

export default async function routeAuth(req: Request, res: Response, next: NextFunction) {
  const indexRoute = req.path === "/" && req.method === "GET";

  if (indexRoute) return next();

  const isProduction = process.env.NODE_ENV;

  if (isProduction)
    try {
      const secretsManager = new SecretsManagerClient({ region: "us-east-2" });
      const secretsResponse = await secretsManager.send(
        new GetSecretValueCommand({
          SecretId: "pro/lambda/monolith"
        })
      );
      const secrets = secretsResponse.SecretString ? JSON.parse(secretsResponse.SecretString) : null;
      
      const checkJwt = auth({
        audience: `${secrets.AUTH0_AUDIENCE_URL}`,
        issuerBaseURL: `${secrets.AUTH0_URL}`,
        tokenSigningAlg: `${secrets.AUTH0_SIGNING_ALG}`
      });
    
      return checkJwt(req, res, (err) => {
        if (err) {
          return res.status(401).json({
            data: {
              status: "unauthorized"
            }
          });
        }
    
        next();
      });
    } catch {
      console.log("Well that's not good...");
    }
      
  const checkJwt = auth({
    audience: `${process.env.AUTH0_AUDIENCE_URL}`,
    issuerBaseURL: `https://${process.env.AUTH0_URL}`,
    tokenSigningAlg: `${process.env.AUTH0_SIGNING_ALG}`
  });

  return checkJwt(req, res, (err) => {
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
