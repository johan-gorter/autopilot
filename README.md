# AI Generated issue management system
Will AI replace software developers? Can AI already create a complete web application?
How will the role of software developers change in the future?
This is an experiment to see how far we can get with AI generated code.

Unless you have checked out one of the branches, you are looking at a repository
without any code in it. All that is here is this README.md file and a `specifications` folder. The specifications folder contains the specifications for a non-trivial, but not overly complex web application, in our case an issue management system. It contains a list of usecases and detailed specifications of every page. If this experiment succeeds,
non-technical people should be able to change the specifications and AI should be able to make the changes to the application all by itself.

Normally a programmer would write the code and GitHub copilot helps out. In this experiment we will let GitHub copilot write the code and we tell it how to, essentially making the copilot an autopilot 🤯.

## Phase 1: Technical documentation
Trying to create big pieces of a web application in one prompt will not work. So we need to break down the specifications into smaller pieces. I know it may sound boring, but the first step we need is technical documentation. In this blog I will be using mongodb, so let's start by documenting the data model for our web application.
A formal mongodb json schema for documents is an option, but if we want devops engineers to be able to query the database, we want documentation in natural language. Natural language also works very well for AI, so let's do that.

### Comment document structure
Let's start with the comment document. We proceed as follows: We start a new chat window with copilot chat and copy-paste the contents of all specification documents that are relevant. In this case we add the contents of `usecases.md` and `issue-details.md`. After this we add the following prompt:
```markdown
Create a concise markdown document that describes our how comment documents in mongodb are structured. Issues use an integer as _id.
```
And voila, copilot chat creates a nice document for us that we can store under `docs/database/comment.md`, so we can use it for our next prompts.
```markdown

```

This is the part of the specifications that describes the data model and the API. 
We will create a prompt for every table in the data model and a prompt for every API endpoint. We will then use GitHub copilot to generate the code for the data model and the API.
 using a single prompt It may sound boring, 