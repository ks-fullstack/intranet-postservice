import mongoose, { Schema } from "mongoose";
import { IPost } from "../interface/post.interface";

const postSchema: Schema = new Schema(
  {
    postId: {
      required: true,
      trim: true,
      type: String,
      unique: true,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: String,
    },
    postType: {
      enum : ["photo", "video", "audio", "text", "files"],
      required: true,
      type: String,
    },
    attachments: {
      required: true,
      type: String,
    },
    isPostApproved: {
      default: false,
      type: Boolean,
    },
    isActive: {
      default: true,
      type: Boolean,
    },
    createdBy: {
      type: Object,
    },
    updatedBy: {
      type: Object,
    },
  },
  {
    timestamps: true,
  },
);

postSchema.index(
  { title: 1, keywords: 1, description: 1 },
  { unique: true },
);

const post = mongoose.model<IPost>("Post", postSchema);

export default post;
