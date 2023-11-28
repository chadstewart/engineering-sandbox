import express from "express";
import https from "https";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export const app = express();
dotenv.config();

//Initialize Request Data Type
app.use(express.json({ limit: "10mb" }));

//Initialize Routers
import v1Router from "./v1/routes/router";
import serverLogger from "./middleware/logger";
import { startPerformanceTest } from "./middleware/perf-test-start";
import { endPerformanceTest } from "./middleware/perf-test-complete";

//Initialize Performance Test
app.use(startPerformanceTest);

//Use Routers
app.use("/v1/", v1Router);

app.get("/", (req, res) => res.send("Hello World!!"));

//Initialize Performance Test Complete
app.use(endPerformanceTest);

//Initialize Logger
app.use(serverLogger);