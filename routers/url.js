import { Router } from "express";
import {
  generateShortUrl,
  getOriginalUrl,
  getAnalytics,
} from "../controllers/url.js";

const router = Router();

router.post("/", generateShortUrl);
router.get("/:shortId", getOriginalUrl);
router.get("/analytics/:shortId", getAnalytics);

export default router;
