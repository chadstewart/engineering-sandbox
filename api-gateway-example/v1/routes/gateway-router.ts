import express from "express";
const router = express.Router();

import getCatImage from "../controllers/cat-controller";

router.get("/cat", getCatImage);

export default router;