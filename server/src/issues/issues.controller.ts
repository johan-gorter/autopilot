import { Controller, Get, Post, Body } from '@nestjs/common';
import { IssueService } from './issues.service';

@Controller('issues')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  async create(@Body() createIssueDto: any) {
    return this.issueService.create(createIssueDto);
  }

  @Get()
  async findAll() {
    return this.issueService.findAll();
  }

  // Add other endpoints as needed (e.g., get one issue, update issue, delete issue)
}