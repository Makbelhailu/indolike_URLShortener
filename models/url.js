import { Schema, model } from "mongoose";

const UrlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    viewHistory: [
      {
        timestamp: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = model("url", UrlSchema);

export default URL;
