# AI-Generated Issue Management System

This is an issue management system where users can create new issues, comment on issues, and change the status of issues.

## Technical Decisions

The application is built using the following technologies:

- **Backend**: NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Database**: MongoDB, a source-available cross-platform document-oriented database program.
- **Frontend**: React, a JavaScript library for building user interfaces, along with TypeScript for adding static type definitions.
- **Styling**: TailwindCSS, a utility-first CSS framework for rapidly building custom user interfaces.

## Folder Structure

The project is divided into two main directories:

- `client`: This directory contains the React application.
- `server`: This directory contains the NestJS server.

## MongoDB Connection

During development, we use a local MongoDB instance. The connection string is:

```
mongodb://localhost:27017/issue-management
```

Please ensure MongoDB is running locally and replace the connection string as necessary.

## Starting the Application

To start the server, navigate to the `server` directory and run:

```bash
npm run start
```

The server will start on `http://localhost:3000`.

To start the client, navigate to the `client` directory and run:

```bash
npm start
```

The client will start on `http://localhost:3001` and is set up with a proxy to the server for handling API requests.
