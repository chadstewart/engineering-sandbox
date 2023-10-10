import { Request, Response, NextFunction } from "express";
import zod from "zod";
import { createZodFetcher } from "zod-fetch";

export default async function getCatImage (req: Request, res: Response, next: NextFunction) {
  const fetchWithZod = createZodFetcher();

  try {
    const data = await fetchWithZod(
      zod.array(
        zod.object({
          id: zod.string(),
          url: zod.string(),
          width: zod.number(),
          height: zod.number()
        })
      ),
      "https://api.thecatapi.com/v1/images/search"
    );
    
    const catImgUrl = data[0].url;

    const jsonResponseToUser = {
      status: "success",
      data: {
        catImgUrl: catImgUrl
      }
    };

    res.locals.responseToUser = jsonResponseToUser;
    res.status(200).json(jsonResponseToUser);

    return next();

  } catch ( error ) {
  
    return res.status(500).json({
      status: "failed",
      data: {
        error: error
      }
    })
  }

};