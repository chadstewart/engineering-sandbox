import { Redis } from "ioredis";

//Initialize Redis
export const redis = new Redis(`redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_PUBLIC_URL}`);