# Server

The server for our web application uses NodeJS with Typescript and express to provide a REST API for the client. The server also connects to a MongoDB database to store and retrieve data using mongoose. We also use express-validator to validate requests. We use Jest to test our application. Passport is the library used to authenticate users using a username and password. Users can also sign up by providing a unique username and password.

Files for the browser are served using express.static. Urls for pages all end with .html (example: login.html, sign-up.html).

# Sitemap
.
├── src
│   ├── server.ts (Entry point for the application)
│   ├── routes (Directory containing all route handlers)
│   │   ├── login.ts (Handles login requests)
│   │   ├── signup.ts (Handles signup requests)
│   │   └── issues.ts (Handles issue related requests)
│   ├── models (Directory containing all Mongoose models)
│   │   ├── user.ts (User model)
│   │   └── issue.ts (Issue model)
│   └── middleware (Directory containing all middleware functions)
│       └── auth.ts (Handles user authentication)
├── public (Directory containing all static files to be served)
│   ├── login.html
│   ├── signup.html
│   └── issues.html
├── test (Directory containing all Jest test cases)
│   ├── login.test.ts
│   ├── signup.test.ts
│   └── issues.test.ts
└── package.json (Project metadata and dependencies)