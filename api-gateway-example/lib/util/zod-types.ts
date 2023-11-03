import zod from "zod";

export const checkForCredsData = zod.object({
  "client_id": zod.string(),
  "client_secret": zod.string(),
  "audience": zod.string().url(),
  "grant_type": zod.string()
});