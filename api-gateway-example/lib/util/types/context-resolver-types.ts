import { Request } from "express";

export interface ResolverContext {
  currentTime: Date,
  requestObject: Request
}