import express from "express";
/* import https from "https";
import fs from "fs";
import path from "path"; */
import dotenv from "dotenv";

export const app = express();
dotenv.config();

//Initialize Request Data Type
app.use(express.json({ limit: "10mb" }));

//Initialize Routers
import v1AuthRouter from "./v1/routes/authn-router";
import notDefined from "./middleware/not-defined";

//Initialize notDefined Middleware
app.use(notDefined);

//Use Routers
app.use("/v1/auth", v1AuthRouter);
app.get("/", (req, res) => res.send("Hello World!!"));
