# Issue management system
This is an issue management system where users can create new issues, comment on issues and change the status of issues.

# Use cases
1. As a `User`, I want to `create a new issue` so that I can `report a problem or request a feature`.
2. As a `User`, I want to `comment on an issue` so that I can `provide more information or express my opinion`.
3. As a `User`, I want to `change the status of an issue` so that I can `update the progress of the issue`.
4. As a `User`, I want to `search for issues` so that I can `find specific issues quickly`.
5. As a `User`, I want to `filter issues` so that I can `view issues based on certain criteria`.

# Requirements
Use mongodb to store the data.
All documents use ObjectId as id, except issues, they have an integer as id that auto increments.
