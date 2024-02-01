import mongoose, { Document, Schema } from 'mongoose';

// Define IssueSchema
const IssueSchema = new Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  creator: { type: String, required: true },
  assignee: { type: String, required: true }
});

// Define IIssue interface
export interface IIssue extends Document {
  _id: number;
  title: string;
  description: string;
  status: string;
  creator: string;
  assignee: string;
}

// Create Issue model
export const Issue = mongoose.model<IIssue>('Issue', IssueSchema);