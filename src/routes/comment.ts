import express from 'express';
import { body, validationResult, query } from 'express-validator';
import mongoose from 'mongoose';

const router = express.Router();

// Comment model
const Comment = mongoose.model('Comment', new mongoose.Schema({
  issueId: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: String
}));

// POST /api/comment
router.post('/api/comment',
  body('issueId').isString(),
  body('text').isString().isLength({ max: 500 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const comment = new Comment({
      issueId: req.body.issueId,
      text: req.body.text,
      createdBy: (req.user as any).username
    });

    await comment.save();

    res.status(201).send();
  }
);

// GET /api/comment
router.get('/api/comment',
  query('issueId').isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const comments = await Comment.find({ issueId: req.query!.issueId as string });

    res.status(200).json(comments);
  }
);

export default router;