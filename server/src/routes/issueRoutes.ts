import express from 'express';
import { Issue } from '../models/issueModel';

export const issueRoutes = express.Router();

issueRoutes.get('/', async (req, res) => {
  const issues = await Issue.find();
  res.send(issues);
});

issueRoutes.put('/:id', async (req, res) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!issue) return res.status(404).send('The issue with the given ID was not found.');
  res.send(issue);
});