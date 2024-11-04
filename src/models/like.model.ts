import mongoose, { Schema } from "mongoose";
import { ILike } from "../interface/like.interface";

const likeSchema = new Schema(
  {
    postId: {
      required: true,
      trim: true,
      type: String,
    },
    isLiked: {
      default: false,
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

likeSchema.index(
  { postId: 1 },
  { unique: true },
);

const like = mongoose.model<ILike>("Like", likeSchema);

export default like;
