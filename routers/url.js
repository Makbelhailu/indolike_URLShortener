import { Router } from "express";
import { generateShortUrl, getOriginalUrl } from "../controllers/url.js";

const router = Router();

router.post("/", generateShortUrl);
router.get("/:shortId", getOriginalUrl);

export default router;
