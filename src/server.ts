import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';

import commentsRouter from './routes/comment';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/issue_management', {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
// TODO: Add Passport configuration here

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(commentsRouter);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));