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
import notDefined from "./middleware/not-defined";

//Initialize notDefined Middleware
app.use(notDefined);

//Use Routers
app.get("/", (req, res) => res.send("Hello World!!"));
