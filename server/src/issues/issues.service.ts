import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Issue } from './issues.model';

@Injectable()
export class IssueService {
  constructor(@InjectModel(Issue.name) private issueModel: Model<Issue>) {}

  async create(createIssueDto: any): Promise<Issue> {
    const createdIssue = new this.issueModel(createIssueDto);
    return createdIssue.save();
  }

  async findAll(): Promise<Issue[]> {
    return this.issueModel.find().exec();
  }

  // Add other methods as needed (e.g., findOne, update, delete)
}