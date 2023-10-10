import { Request, Response, application } from "express";
import zod from "zod";
import { createZodFetcher } from "zod-fetch";

export default async function getToken (req: Request, res: Response) {
  const checkForCredsData = zod.object({
    "client_id": zod.string(),
    "client_secret": zod.string(),
    "audience": zod.string().url(),
    "grant_type": zod.string()
  });

  const fetchWithZod = createZodFetcher();

  try {
    await checkForCredsData.parse(req.body);

    const data = await fetchWithZod(
      zod.object({
        access_token: zod.string(),
        expires_in: zod.number(),
        token_type: zod.string()
      }),
      `${process.env.AUTH0_URL}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    return res.status(200).json({
      status: "success",
      data: {
        ...data
      }
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