# MongoDB Issue Document Structure

In our MongoDB database, each issue is stored as a document within an "issues" collection. The structure of an issue document is as follows:

```json
{
    "_id": <integer>,
    "title": <string>,
    "description": <string>,
    "status": <string>,
    "creator": <string>,
    "assignee": <string>,
    "comments": [
        {
            "username": <string>,
            "comment": <string>,
            "date": <date>
        },
        ...
    ]
}
```

- `_id`: A unique integer identifier for the issue. This is auto-incremented for each new issue.
- `title`: The title of the issue.
- `description`: A detailed description of the issue.
- `status`: The current status of the issue. Can be 'Open', 'In Progress', or 'Closed'.
- `creator`: The username of the user who created the issue.
- `assignee`: The username of the user who is currently assigned to the issue.
- `comments`: An array of comment objects. Each comment object contains the `username` of the commenter, the `comment` text, and the `date` the comment was posted.

# Determining the Next _id

The `_id` field is a unique identifier for each issue document. To determine the next `_id`, we use a separate "counters" collection in MongoDB. This collection contains a single document for the "issues" collection that tracks the next `_id` value:

```json
{
    "_id": "issue_id",
    "seq": <integer>
}
```

Whenever a new issue is created, we increment the `seq` value and use it as the `_id` for the new issue. This ensures that each issue has a unique `_id` and that `_id` values are not reused when issues are deleted.