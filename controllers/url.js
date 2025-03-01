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

export async function getOriginalUrl(req, res) {
  try {
    const { shortId } = req.params;
    const url = await URL.findOne({ shortId });
    if (!url) return res.status(404).json({ error: "URL not found" });
    url.viewHistory.push({ timestamp: Date.now() });
    await url.save();
    res.redirect(url.redirectURL);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
