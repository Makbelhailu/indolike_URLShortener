import URL from "../models/url.js";
import shortid from "shortid";

export async function generateShortUrl(req, res) {
  try {
    const shortId = shortid();
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: "URL must be provided" });

    await URL.create({
      shortId,
      redirectURL: url,
      viewHistory: [],
    });

    res.status(201).json({ id: shortId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
