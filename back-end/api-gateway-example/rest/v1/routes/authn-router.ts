import express from "express";
const router = express.Router();

import getToken from "../controllers/authn-controller";

router.post("/token", getToken);

export default router;