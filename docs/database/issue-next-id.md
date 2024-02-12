# Issue ID Generation

The Issue document in the issue management system uses an integer as its unique identifier (`id`), instead of the typical ObjectId used in MongoDB. This `id` is auto-incremented each time a new issue is created. This ensures that each issue has a unique `id` that is never reused.

## Fields

- **id**: Integer - The unique identifier for the issue. This field is auto-incremented each time a new issue is created.

## Auto-Incrementing the Issue ID

To auto-increment the `id` field, we use a separate MongoDB document to keep track of the last used `id`. This document is in a collection called `counters`.

The `counters` collection has a single document for issue `id` generation:

```json
{
    "_id": "issue_id",
    "seq": 0
}
```

The `seq` field stores the last used `id` for issues. When a new issue is created, we increment the `seq` field and use its value for the `id` of the new issue.

Here is a JavaScript function that performs this operation:

```javascript
async function getNextIssueId() {
    const counter = await db.collection('counters').findOneAndUpdate(
        { _id: 'issue_id' },
        { $inc: { seq: 1 } },
        { returnOriginal: false }
    );
    return counter.value.seq;
}
```

This function uses the `findOneAndUpdate` method to atomically increment the `seq` field and return the updated document. The `returnOriginal: false` option ensures that the updated document is returned, not the original one.

## Indices

- **id**: The `id` field should be indexed for faster lookup of issues.

## Relations

- **None**: The `counters` collection does not have any relations with other collections.

## Example

```json
{
    "_id": "issue_id",
    "seq": 123
}
```

This example represents the `counters` document for issue `id` generation. The `seq` field indicates that the `id` of the next issue to be created will be `124`.