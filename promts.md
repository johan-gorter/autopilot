# REST API
## Issue
Provide database/issue.md usecases.md, issue-list.md, issue-details.md, new-issue.md
Create the openapi document describing all issue endpoints on /api/issue needed to serve the pages. Assume that the endpoints for comments already implemented on /api/comment. Start by explaining each required endpoint (url, method, every parameter, every validation) and then create the document.

## issue route

# Server
## sitemap in server.md
provide server.md
Create a sitemap (a description of the folder structure and some main files for our web application) to add to the technical documentation. 
Specify locations for routes, mongoose models, jest testcases, demo data and scripts. We use src/server.ts as entry point and public/ for static files to serve.

give me the commands to create the folders mentioned in the sitemap.

Create the content of src/server.ts with authentication, create a placeholder where to add routes later.

Give me the npm and typescript commands needed to initialize our web application. 

Tell me how to start the server and run unit tests. The server should auto reload changes.

# Models
provide server.md, database/x.md
Implement the mongoose schema and interface for x.


# Routes

## Comment
Give me the complete files with the implementation of this endpoint and the code to add to server.ts to register it

## Issue
provide server.md, issue.md, issue.yml

Describe every endpoint with each parameter and tell in a few lines of pseudocode how to use mongodb to get the specified response and changes to the database. Include instructions how to determine the right id / _id when creating a new issue.

Implement of the mongoose models for issues and counter and create the file with the routes that only placeholders for the route implementation. Then provide the lines to add to src/server.ts to register it.


# Demo data
Provide server.md database/user.md database/comment.md database/issue.md

Give me 3 JSON files with an array containing demo data files for users, issues and comments. Make realistic issues about a fictional government tax application web application. There should be 2 users, 3 issues with 0-3 comments each.

Create a script scripts/seed-demo-data.ts that adds the demo data from test/demo-data to the database. Provide the lines to add to package.json to run this command.