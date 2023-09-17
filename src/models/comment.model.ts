import mongoose, { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  blog: string;
  user: string;
  text: string;
}

const CommentSchema: Schema = new Schema({
  blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  text: { type: String, required: true },
});

export default mongoose.model<Comment>('Comment', CommentSchema);

