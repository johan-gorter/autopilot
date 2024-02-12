import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';

import commentRouter from './routes/comment';
import issueRouter from './routes/issue';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(passport.initialize());

// Static file serving
app.use(express.static(join(__dirname, '../public')));

// Placeholder for API routes
app.use(commentRouter);
app.use(issueRouter);

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
