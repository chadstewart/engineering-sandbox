import { Request, Response } from "express";
import { getAuthentication } from "../../lib/api/external-apis/auth0";
import { checkForCredsData } from "../../lib/api/external-apis/auth0/util/zod-types";

export default async function getToken (req: Request, res: Response) {
  try {
    const requestBody = await checkForCredsData.parse(req.body);

    const data = await getAuthentication(requestBody);

    return res.status(200).json({
      status: "success",
      data
    });

  } catch ( error ) {
  
    return res.status(401).json({
      status: "failed",
      data: {
        error: error
      }
    })
  }

};