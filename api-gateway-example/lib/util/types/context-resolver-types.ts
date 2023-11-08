import { Request } from "express";

export interface ResolverContext {
  requestObject: Request
}