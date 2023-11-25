import zod from "zod";
import api from "../../config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getCats = async () => {
  const data = await api.get(
    zod.object({      
      id: zod.string(),
      width: zod.number(),
      height: zod.number(),
      url: zod.string()
    }).array(),
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  return data;
};