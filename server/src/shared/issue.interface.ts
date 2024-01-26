import type { Document } from 'mongoose';

export interface Issue extends Document {
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Closed';
  assignedTo: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}