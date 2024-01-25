# Database Structure for Issues

## Overview
This document describes the structure of the `Issues` collection in our MongoDB database. Each document in the collection represents a single issue.

## Fields

1. **_id**: A unique identifier for the issue. This is the primary key for the document.
   - MongoDB Data Type: `ObjectId`
   - Usage: Used to uniquely identify each issue.
   - Sample: `ObjectId("507f1f77bcf86cd799439011")`

2. **title**: The title of the issue.
   - MongoDB Data Type: `String`
   - Usage: Used to provide a brief summary of the issue.
   - Sample: `Bug in login screen`

3. **description**: A detailed description of the issue.
   - MongoDB Data Type: `String`
   - Usage: Used to provide all the necessary details about the issue.
   - Sample: `When trying to login, the application crashes if the password contains special characters.`

4. **status**: The current status of the issue.
   - MongoDB Data Type: `String`
   - Usage: Used to track the progress of the issue.
   - Sample: `Open`
   - Possible Values: `Open`, `In Progress`, `Closed`

5. **createdAt**: The date and time when the issue was created.
   - MongoDB Data Type: `Date`
   - Usage: Used to track when the issue was reported.
   - Sample: `ISODate("2022-01-01T12:34:56Z")`

6. **updatedAt**: The date and time when the issue was last updated.
   - MongoDB Data Type: `Date`
   - Usage: Used to track the latest modifications to the issue.
   - Sample: `ISODate("2022-01-02T12:34:56Z")`

7. **reporterId**: The ID of the user who reported the issue.
   - MongoDB Data Type: `ObjectId`
   - Usage: Used to identify who reported the issue.
   - Sample: `ObjectId("507f191e810c19729de860ea")`

8. **assigneeId**: The ID of the user who is currently assigned to the issue.
   - MongoDB Data Type: `ObjectId`
   - Usage: Used to identify who is currently working on the issue.
   - Sample: `ObjectId("507f191e810c19729de860eb")`
   - Note: This field can be `null` if the issue is not currently assigned to anyone.
