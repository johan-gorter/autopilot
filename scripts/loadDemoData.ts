import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { Issue } from '../server/src/models/issueModel';

async function loadDemoData() {
  try {
    // Connect to the database
    await mongoose.connect('mongodb://localhost:27017/issues', {})
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err));

    // Read the demo data from the JSON file
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../demoData/issues.json'), 'utf8'));

    // Load the data into the database
    for (const issue of data) {
      const newIssue = new Issue(issue);
      await newIssue.save();
    }

    console.log('Demo data loaded successfully.');
  } catch (error) {
    console.error('Failed to load demo data:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
}

loadDemoData();