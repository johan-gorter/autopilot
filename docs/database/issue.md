# Issue Document

The issue document is used to store issues reported by users. Each issue is associated with a specific user and can have multiple comments.

## Fields

- **_id**: Integer - The unique identifier for the issue. This field auto increments and is never reused.
- **title**: String - The title of the issue. This field has a maximum length of 100 characters.
- **description**: String - The description of the issue.
- **status**: String - The status of the issue. This field can have one of the following values: 'Open', 'In Progress', 'Closed'.
- **creatorId**: ObjectId - The id of the user who created the issue. This is a reference to the [user](user.md) document.
- **assigneeId**: ObjectId - The id of the user who is assigned to the issue. This is a reference to the [user](user.md) document.

## Relations

- **creator**: Each issue is associated with one user as the creator. The `creatorId` field is a reference to the [user](user.md) document.
- **assignee**: Each issue can be associated with one user as the assignee. The `assigneeId` field is a reference to the [user](user.md) document.
- **comments**: Each issue can have multiple comments. The relation is established via the `issueId` field in the [comment](comment.md) document.

## Indices

- **_id**: An index is created on the `_id` field to quickly fetch issues by their id.
- **creatorId**: An index is created on the `creatorId` field to quickly fetch all issues created by a specific user.
- **assigneeId**: An index is created on the `assigneeId` field to quickly fetch all issues assigned to a specific user.

## Example

```json
{
    "_id": 1,
    "title": "Issue title",
    "description": "This is a description of the issue.",
    "status": "Open",
    "creatorId": ObjectId("60d5ec9af682fbd12a892fd7"),
    "assigneeId": ObjectId("60d5ec9af682fbd12a892fd8")
}
```