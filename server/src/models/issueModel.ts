import mongoose from 'mongoose';
import { IIssue } from '../../../common/data/issue';

const issueSchema = new mongoose.Schema<IIssue>({
  _id: String,
  title: String,
  description: String,
  status: String,
  createdAt: Date,
  updatedAt: Date,
  reporterId: String,
  assigneeId: String,
});

export const Issue = mongoose.model<IIssue>('Issue', issueSchema);