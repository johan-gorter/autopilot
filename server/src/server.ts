import express from 'express';
import mongoose from 'mongoose';
import { issueRoutes } from './routes/issueRoutes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/issues', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/issues', issueRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));