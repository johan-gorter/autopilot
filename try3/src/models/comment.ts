import mongoose, { Document, Schema } from 'mongoose';

// Step 2: Define the Comment interface
export interface IComment extends Document {
    issueId: number;
    username: string;
    commentText: string;
    postedAt: Date;
}

// Step 3: Define the CommentSchema
const CommentSchema: Schema = new Schema({
    issueId: { type: Number, required: true },
    username: { type: String, required: true },
    commentText: { type: String, required: true, maxlength: 500 },
    postedAt: { type: Date, required: true },
});

// Step 4: Create and export the Comment model
export const Comment = mongoose.model<IComment>('Comment', CommentSchema);