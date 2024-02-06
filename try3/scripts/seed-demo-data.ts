import fs from 'fs';
import mongoose from 'mongoose';
import { User } from '../src/models/user';
import { Issue } from '../src/models/issue';
import { Comment } from '../src/models/comment';

async function seedData() {
    // Connect to the MongoDB database
    await mongoose.connect('mongodb://localhost:27017/issue_management', {});

    // Read and parse the JSON data
    const users = JSON.parse(fs.readFileSync('test/demo-data/users.json', 'utf-8'));
    const issues = JSON.parse(fs.readFileSync('test/demo-data/issues.json', 'utf-8'));
    const comments = JSON.parse(fs.readFileSync('test/demo-data/comments.json', 'utf-8'));

    // Insert the data into the MongoDB database
    await User.insertMany(users);
    await Issue.insertMany(issues);
    await Comment.insertMany(comments);

    // Close the database connection
    await mongoose.connection.close();
}

seedData().catch(console.error);