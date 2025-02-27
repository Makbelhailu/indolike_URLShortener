import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

// routers
import urlRouter from "./routers/url.js";

config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/short-url";

app.use("/api/url/", urlRouter);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log(`server started at ${port}`));
  })
  .catch((err) => console.error("Error:", err.message));
