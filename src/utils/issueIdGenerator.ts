import mongoose from 'mongoose';

async function getNextIssueId() {
  const counter = await mongoose.connection.db.collection('counters').findOneAndUpdate(
    { _id: 'issue_id' } as any,
    { $inc: { seq: 1 } },
    { returnOriginal: false, upsert: true } as any
  ) as any;

  return counter.seq;
}

export { getNextIssueId };