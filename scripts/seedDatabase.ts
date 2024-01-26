import mongoose, { Model, Document } from 'mongoose';
import fs from 'fs';
import path from 'path';
import { Issue } from '../server/src/shared/issue.interface';
import IssueSchema from '../server/src/models/issue.schema';

const uri = 'mongodb://localhost:27017/issue-management';

interface IssueDocument extends Issue, Document {}
const IssueModel: Model<IssueDocument> = mongoose.model('Issue', IssueSchema) as any;

async function seedDatabase() {
  try {
    await mongoose.connect(uri, {    });

    console.log('Connected to MongoDB');

    const data = fs.readFileSync(path.join(__dirname, '../demoData/issues.json'), 'utf8');
    const issues: Issue[] = JSON.parse(data);

    for (const issue of issues) {
      const newIssue = new IssueModel(issue);
      await newIssue.save();
    }

    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database', error);
    process.exit(1);
  }
}

seedDatabase();