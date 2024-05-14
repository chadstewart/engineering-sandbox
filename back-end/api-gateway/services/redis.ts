import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();

//Initialize Redis
export const redis = new Redis(`redis://${process.env.REDIS_PUBLIC_URL}`);