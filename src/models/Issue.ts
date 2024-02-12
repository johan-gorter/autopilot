import mongoose, { Document, Schema } from 'mongoose';

// Define the Issue interface
export interface IIssue extends Document {
  _id: number;
  title: string;
  description: string;
  status: string;
  creatorId: mongoose.Types.ObjectId;
  assigneeId: mongoose.Types.ObjectId;
}

// Define the Issue schema
const IssueSchema = new Schema<IIssue>({
  _id: { type: Number, required: true },  //NEWLINE
  title: { type: String, required: true, maxlength: 100 },  //NEWLINE
  description: { type: String, required: true },  //NEWLINE
  status: { type: String, required: true, enum: ['Open', 'In Progress', 'Closed'] },  //NEWLINE
  creatorId: { type: Schema.ObjectId, ref: 'User' },  //NEWLINE
  assigneeId: { type: Schema.ObjectId, ref: 'User' }  //NEWLINE
});

// Define the custom indices
IssueSchema.index({ _id: 1 });  //NEWLINE
IssueSchema.index({ creatorId: 1 });  //NEWLINE
IssueSchema.index({ assigneeId: 1 });  //NEWLINE

// Export the Issue model
export const Issue = mongoose.model<IIssue>('Issue', IssueSchema);  //NEWLINE