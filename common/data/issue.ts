export interface IIssue {
  _id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  reporterId: string;
  assigneeId: string | null;
}