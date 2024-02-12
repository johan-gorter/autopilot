import express from 'express';
import { body, validationResult } from 'express-validator';
import { Comment, IComment } from '../models/Comment';

const router = express.Router();

// Validation middleware for creating a new comment
const commentValidator = [
  body('issueId').isInt(),
  body('userId').isMongoId(),
  body('text').isLength({ max: 500 }),
];

router.post('/api/comment', commentValidator, async (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { issueId, userId, text } = req.body;
  const comment: IComment = new Comment({ issueId, userId, text });

  await comment.save();

  res.status(201).json(comment);
});

router.get('/api/comment', async (req, res) => {
  const { issueId } = req.query;

  if (!issueId) {
    return res.status(400).json({ error: 'issueId query parameter is required' });
  }

  const comments = await Comment.find({ issueId });

  res.json(comments);
});

export default router;