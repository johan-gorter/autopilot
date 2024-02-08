import mongoose, { Document, Schema } from 'mongoose';

// Define the Comment schema
const CommentSchema = new Schema({
  issueId: { type: Number, required: true, index: true },
  userId: { type: Schema.Types.ObjectId, required: true, index: true },
  text: { type: String, required: true, maxlength: 500 },
  timestamp: { type: Date, default: Date.now },
});

// Define the Comment document interface
export interface IComment extends Document {
  issueId: number;
  userId: mongoose.Types.ObjectId;
  text: string;
  timestamp: Date;
}

// Create and export the Comment model
export const Comment = mongoose.model<IComment>('Comment', CommentSchema);