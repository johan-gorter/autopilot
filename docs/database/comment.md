# Comment Document

The comment document is used to store comments made by users on issues. Each comment is associated with a specific issue and user.

## Fields

- **_id**: ObjectId - The unique identifier for the comment.
- **issueId**: Integer - The id of the issue that the comment is associated with. This is a reference to the [issue](issue.md) document.
- **userId**: ObjectId - The id of the user who made the comment. This is a reference to the [user](user.md) document.
- **text**: String - The text of the comment. This field has a maximum length of 500 characters.
- **timestamp**: Date - The date and time when the comment was posted.

## Relations

- **issue**: Each comment is associated with one issue. The `issueId` field is a reference to the [issue](issue.md) document.
- **user**: Each comment is associated with one user. The `userId` field is a reference to the [user](user.md) document.

## Indices

- **issueId**: An index is created on the `issueId` field to quickly fetch all comments associated with a specific issue.
- **userId**: An index is created on the `userId` field to quickly fetch all comments made by a specific user.

## Example

```json
{
    "_id": ObjectId("60d5ec9af682fbd12a892fe0"),
    "issueId": 1,
    "userId": ObjectId("60d5ec9af682fbd12a892fd7"),
    "text": "This is a comment on the issue.",
    "timestamp": ISODate("2021-06-25T12:00:00Z")
}
```