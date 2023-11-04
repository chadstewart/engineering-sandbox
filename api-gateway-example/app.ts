import express from "express";
import https from "https";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import routeAuth from "./middleware/route-authz";
import rateLimit from "./middleware/rate-limit";
import checkCache from "./middleware/check-cache";
import addToCache from "./middleware/add-to-cache";

export const app = express();
dotenv.config();

//Initialize Request Data Type
app.use(express.json({ limit: "10mb" }));

//Initialize Middlewares
app.use(routeAuth);
app.use(rateLimit);
app.use(checkCache);

//Initialize Routers
import v1AuthRouter from "./v1/routes/authn-router";

//Use Routers
app.use("/v1/auth", v1AuthRouter);
app.get("/", (req, res) => res.send("Hello World!!"));

//Initialize Cache
app.use(addToCache);