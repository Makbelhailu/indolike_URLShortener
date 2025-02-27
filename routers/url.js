import { Router } from "express";
import { generateShortUrl } from "../controllers/url.js";

const router = Router();

router.post("/", generateShortUrl);

export default router;
