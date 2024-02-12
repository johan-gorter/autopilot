import mongoose from 'mongoose';
import { Issue, IIssue } from '../src/models/Issue';
import { Comment, IComment } from '../src/models/Comment';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', { });

// Hardcoded user ID
const userId = new mongoose.Types.ObjectId('60d5ec9af682fbd12a892fd7');

// Issues to be added
const issues: IIssue[] = <any>[
  {
    _id: 1,
    title: 'Incorrect Tax Calculation',
    description: 'The application is not calculating the tax correctly for certain income brackets.',
    status: 'Open',
    creatorId: userId,
    assigneeId: userId
  },
  {
    _id: 2,
    title: 'UI Misalignment in Form',
    description: 'The input fields in the tax filing form are misaligned when viewed on a mobile device.',
    status: 'In Progress',
    creatorId: userId,
    assigneeId: userId
  }
];

// Comments to be added
const comments: IComment[] = <any>[
  {
    issueId: 1,
    userId: userId,
    text: 'I have also experienced this issue when filing my taxes.',
    timestamp: new Date()
  },
  {
    issueId: 1,
    userId: userId,
    text: 'This issue is being investigated. We will provide an update soon.',
    timestamp: new Date()
  },
  {
    issueId: 2,
    userId: userId,
    text: 'This issue has been acknowledged and a fix is in progress.',
    timestamp: new Date()
  },
  {
    issueId: 2,
    userId: userId,
    text: 'The fix for this issue will be included in the next update.',
    timestamp: new Date()
  }
];

// Function to add issues and comments to the database
async function addIssuesAndComments() {
  for (const issue of issues) {
    await new Issue(issue).save();
  }

  for (const comment of comments) {
    await new Comment(comment).save();
  }

  console.log('Issues and comments added successfully.');
  mongoose.connection.close();
}

// Call the function
addIssuesAndComments().catch(console.error);