# Comment Document Structure in MongoDB

In MongoDB, the comment documents for the issue management system could be structured as follows:

## Comment Document Fields

1. **_id**: This is a unique identifier for each comment. MongoDB automatically creates this field if not provided. It's of type ObjectId.

2. **issueId**: This is a reference to the [issue](issue.md) that the comment is associated with. It's of type integer, matching the _id of the issue in the issues collection.

3. **username**: This field stores the username of the [user](user.md) who posted the comment. It's of type string.

4. **commentText**: This field stores the text of the comment. It's of type string and has a maximum length of 500 characters.

5. **postedAt**: This field stores the date and time when the comment was posted. It's of type Date.

## Example Comment Document

Here is an example of how a comment document might look in MongoDB:

```json
{
    "_id": ObjectId("60d5ecb8b392d78866aefb99"),
    "issueId": 1,
    "username": "user1",
    "commentText": "This is a comment on the issue.",
    "postedAt": ISODate("2021-06-25T12:00:00Z")
}
```

In this structure, each comment is a separate document in the comments collection. The issueId field links the comment to the relevant issue. This allows for efficient querying of all comments related to a specific issue.