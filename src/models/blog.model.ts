// src/models/blog.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string; // Use ObjectId for author
  comments: string[]; // Use ObjectId for comments
  coAuthors: string[]; // Use ObjectId for coAuthors
  likesCount: number;
  viewsCount: number;
}

const blogSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
  coAuthors: [{ type: Schema.Types.ObjectId, ref: "Author", default: [] }],
  likesCount: { type: Number, default: 0 },
  viewsCount: { type: Number, default: 0 },
});

export default mongoose.model<IBlog>("Blog", blogSchema);
