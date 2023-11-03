import zod from "zod";
import api from "../../config/api";
import { checkForCredsData } from "../../../util/zod-types";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getAuthentication = async (authCreds: zod.infer<typeof checkForCredsData>) => {
  const requestBody = JSON.stringify(authCreds);
  const data = await api.post(
    zod.object({
      access_token: zod.string(),
      expires_in: zod.number(),
      token_type: zod.string()
    }),
    `${process.env.AUTH0_URL}`,
    requestBody,
    CONFIG
  );
  return data;
};