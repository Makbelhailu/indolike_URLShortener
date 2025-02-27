import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

// routers
import urlRouter from "./routers/url.js";

config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/short-url";
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/url/", urlRouter);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log(`server started at ${port}`));
  })
  .catch((err) => console.error("Error:", err.message));
