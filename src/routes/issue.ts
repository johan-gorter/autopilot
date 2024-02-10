import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { Issue, IIssue } from '../models/Issue';
import mongoose from 'mongoose';

const router = express.Router();

// Function to get the next issue ID
async function getNextIssueId() {
    const counter: any = await mongoose.connection.db.collection('counters').findOneAndUpdate(
        { _id: 'issue_id' } as any,
        { $inc: { seq: 1 } },
        { returnOriginal: false } as any
    );
    return counter.seq;
}

// GET /api/issue
router.get('/api/issue', [
    query('title').optional().isString().withMessage('Title must be a string'),
    query('status').optional().isIn(['Open', 'In Progress', 'Closed']).withMessage('Invalid status'),
    query('assigneeId').optional().isMongoId().withMessage('Invalid assignee ID')
], async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const filter: Partial<IIssue> = {};
    if (req.query.title) filter.title = req.query.title as string;
    if (req.query.status) filter.status = req.query.status as string;
    if (req.query.assigneeId) filter.assigneeId = new mongoose.Types.ObjectId(req.query.assigneeId as string);
    const issues = await Issue.find(filter as any);
    res.json(issues);
});

// POST /api/issue
router.post('/api/issue', [
    body('title').isString().withMessage('Title must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('status').optional().isIn(['Open', 'In Progress', 'Closed']).withMessage('Invalid status'),
//    body('creatorId').isMongoId().withMessage('Invalid creator ID'),
    body('assigneeId').optional().isMongoId().withMessage('Invalid assignee ID')
], async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const _id = await getNextIssueId();
    const issue = new Issue({
        _id,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'Open',
        creatorId: req.body.creatorId,
        assigneeId: req.body.assigneeId
    });
    await issue.save();
    res.status(201).json(issue);
});

// GET /api/issue/{id}
router.get('/api/issue/:id', [
    param('id').isInt().withMessage('ID must be an integer')
], async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).send('Issue not found');
    res.json(issue);
});

// PUT /api/issue/{id}
router.put('/api/issue/:id', [
    param('id').isInt().withMessage('ID must be an integer'),
    body('title').optional().isString().withMessage('Title must be a string'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('status').optional().isIn(['Open', 'In Progress', 'Closed']).withMessage('Invalid status'),
    body('assigneeId').optional().isMongoId().withMessage('Invalid assignee ID')
], async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const update: Partial<IIssue> = {};
    if (req.body.title) update.title = req.body.title;
    if (req.body.description) update.description = req.body.description;
    if (req.body.status) update.status = req.body.status;
    if (req.body.assigneeId) update.assigneeId = req.body.assigneeId;
    const issue = await Issue.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!issue) return res.status(404).send('Issue not found');
    res.json(issue);
});

export default router;