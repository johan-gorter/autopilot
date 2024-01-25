# Issue management system

This repository contains the code for an issue management system. This document includes information on how it is structured.

## Libraries and Frameworks

- **Express**: Used as the backend framework for building the server.
- **MongoDB**: Chosen as the database for this project due to its flexibility and scalability.
- **React**: Used for building the user interface on the client side.
- **TypeScript**: Chosen for static typing, which can help catch errors during development.
- **Webpack**: Used for bundling the client-side code.
- **Jest**: Used for testing both the client and server code.

## Folder Structure

The project is divided into several main directories:

- `client`: Contains the React application.
- `server`: Contains the Express server. This includes two subdirectories:
  - `routes`: Contains route handlers.
  - `models`: Contains Mongoose models for interacting with the MongoDB database.
- `common`: Contains utility functions, components that are used in both the client and server, and TypeScript interfaces for the models.
- `tests`: Contains tests for the client and server.
- `demoData`: Contains demo data for seeding the database.
- `scripts`: Contains scripts for tasks such as seeding the database.

## Naming Conventions

- Files and directories are named in `camelCase`.
- TypeScript/JavaScript variables and functions are named in `camelCase`.
- React components are named in `PascalCase`.

## Scripts

The `package.json` file contains several scripts for running the server and tests:

- `start`: Runs the server using `ts-node`.
- `test`: Runs the Jest tests

## Database Seeding

The `seedDatabase.ts` script in the `scripts` directory is used to seed the database with demo data from the `demo_data` directory.