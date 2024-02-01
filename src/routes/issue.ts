// src/routes/issue.ts

import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import { Issue } from '../models/issue';
import Counter from '../models/counter';

const router = express.Router();

router.get('/api/issue', async (req, res) => {
    const query = Issue.find();

    if (req.query.search) {
        query.where({ $text: { $search: req.query.search } });
    }

    if (req.query.status) {
        query.where('status').equals(req.query.status);
    }

    if (req.query.assignedTo) {
        query.where('assignee').equals(req.query.assignedTo);
    }

    const issues = await query.exec();
    res.json(issues);
});

router.post('/api/issue',
    body('title').notEmpty(),
    body('description').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const counter = await Counter.findByIdAndUpdate({ _id: 'issue_id' }, { $inc: { seq: 1 } }, { new: true, upsert: true });
        const issue = new Issue({ _id: counter.seq, ...req.body });
        await issue.save();

        res.status(201).json(issue);
    }
);

router.delete('/api/issue/:id', async (req, res) => {
  const { id } = req.params;

  const issue = await Issue.findById(id);
  if (!issue) {
    return res.status(404).send('Issue not found');
  }

  await issue.deleteOne();
  res.status(204).send();
});

router.get('/api/issue/:id', async (req, res) => {
  const { id } = req.params;

  const issue = await Issue.findById(id);
  if (!issue) {
      return res.status(404).send('Issue not found');
  }

  res.json(issue);
});

export { router as issueRouter };