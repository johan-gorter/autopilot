import express from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { Issue, IIssue } from '../models/Issue';
import { body } from 'express-validator';
import { getNextIssueId } from '../utils/issueIdGenerator';

const router = express.Router();

const validationSchema = checkSchema({
  search: {
    in: ['query'],
    isString: true,
    optional: true,
    errorMessage: 'search must be a string',
  },
  status: {
    in: ['query'],
    isString: true,
    optional: true,
    isIn: {
      options: [['Open', 'In Progress', 'Closed']],
      errorMessage: 'status must be one of: Open, In Progress, Closed',
    },
  },
  assignedTo: {
    in: ['query'],
    isString: true,
    optional: true,
    errorMessage: 'assignedTo must be a string',
  },
  page: {
    in: ['query'],
    isInt: { options: { min: 1 } },
    optional: true,
    errorMessage: 'page must be an integer greater than 0',
  },
  pageSize: {
    in: ['query'],
    isInt: { options: { min: 1 } },
    optional: true,
    errorMessage: 'pageSize must be an integer greater than 0',
  },
});

router.get('/api/issue', validationSchema, async (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { search, status, assignedTo, page = 1, pageSize = 10 } = req.query;

  const query: any = {};
  if (search) {
    query.$or = [
      { title: new RegExp(search as string, 'i') },
      { description: new RegExp(search as string, 'i') },
    ];
  }
  if (status) {
    query.status = status as string;
  }
  if (assignedTo) {
    query.assigneeId = assignedTo as string;
  }

  const issues = await Issue.find(query)
    .skip((page as number - 1) * pageSize as number)
    .limit(pageSize as number);

  res.json(issues);
});

router.post('/api/issue', [
  body('title').isString().isLength({ max: 100 }),
  body('description').isString()
], async (req: express.Request, res: express.Response) => {
  const { title, description } = req.body;

  const issue: IIssue = new Issue({
    _id: await getNextIssueId(),
    title,
    description,
    status: 'Open',
    creatorId: null,
    assigneeId: null
  });

  await issue.save();

  res.status(201).send(issue);
});

export default router;
