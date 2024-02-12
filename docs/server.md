# Server

The server for our web application uses NodeJS with Typescript and express to provide a REST API for the client. The server also connects to a MongoDB database to store and retrieve data using mongoose. We also use express-validator to validate requests. We use Jest to test our application. Passport is the library used to authenticate users using a username and password. Users can also sign up by providing a unique username and password.

Files for the browser are served using express.static. Urls for pages all end with .html (example: login.html, sign-up.html).
We use strict Typescript with es6 module syntax, so use export declarations like `export const` and `export interface`, but do not use `export default`.
Mongoose model files export a model using names like Comment and User along with a typescript interface prefixed with an I like IComment and IUser.

# Sitemap
```markdown
.
├── src
│   ├── server.ts (Entry point for the application)
│   ├── routes (Contains all the route handlers)
│   │   ├── login.ts
│   │   ├── signup.ts
│   │   └── ...
│   ├── models (Contains Mongoose models and corresponding TypeScript interfaces)
│   │   ├── User.ts (Exports IUser and User)
│   │   ├── Comment.ts (Exports IComment and Comment)
│   │   └── ...
│   ├── middleware (Contains middleware functions)
│   │   ├── passport.ts (Passport authentication setup)
│   │   └── ...
│   ├── validators (Contains express-validator validation schemas)
│   │   ├── loginValidator.ts
│   │   ├── signupValidator.ts
│   │   └── ...
│   └── utils (Contains utility functions and scripts)
│       ├── demoData.ts (Script to populate the database with demo data)
│       └── ...
├── public (Contains static files to be served)
│   ├── login.html
│   ├── signup.html
│   └── ...
├── tests (Contains Jest test cases)
│   ├── login.test.ts
│   ├── signup.test.ts
│   └── ...
├── package.json (Lists package dependencies and scripts)
├── tsconfig.json (TypeScript configuration)
└── README.md (Project documentation)
```