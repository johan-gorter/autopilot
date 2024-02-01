import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Issue from '../models/issue';

const router = express.Router();

// Create a new issue
router.post('/api/issue', [
  body('title').isString(),
  body('description').isString(),
  body('status').isIn(['Open', 'In Progress', 'Closed']),
  body('creator').isString(),
  body('assignee').isString(),
], async (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, status, creator, assignee } = req.body;

  try {
    const issue = new Issue({
      _id: new mongoose.Types.ObjectId(),
      title,
      description,
      status,
      creator,
      assignee
    });

    await issue.save();

    res.status(201).json(issue);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Other endpoints (GET, PUT, DELETE) go here

export default router;