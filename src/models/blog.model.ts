// author.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Author extends Document {
  fullName: string;
  email: string;
}

const AuthorSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<Author>('Author', AuthorSchema);

