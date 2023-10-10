import express from "express";
const router = express.Router();

import getCatImage from "../controllers/cat-controller";
import getOrders from "../controllers/orders-controller";

router.get("/cat", getCatImage);
router.get("/order", getOrders);

export default router;