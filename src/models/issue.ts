// src/models/issue.ts
import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed']
  },
  creator: String,
  assignee: String
});

export default mongoose.model('Issue', issueSchema);