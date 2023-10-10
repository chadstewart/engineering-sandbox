import express from "express";
import https from "https";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { InitializeDB } from "./services/database";

export const app = express();
dotenv.config();

//Initialize Database
InitializeDB();

//Initialize Request Data Type
app.use(express.json({ limit: "10mb" }));

//Initialize Routers
import v1Router from "./v1/routes/router";

//Use Routers
app.use("/v1/", v1Router);

app.get("/", (req, res) => res.send("Hello World!!"));