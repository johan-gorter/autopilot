# Client

We use static html files to create the frontend, 
styled using Bulma css and use vanilla javascript to load json data from the apis.
All page urls end with .html
We also use htmx to split up the html into smaller components. 
This is done using the `hx-get` and `hx-trigger="load"` attribute.
Common elements like the user-menu can be found in the public/partials/ folder.
All pages include a consistent navbar.

# Sitemap

Here is a list of the HTML files that we need to fulfill the use cases. Each file corresponds to a specific page in the web application.

1. **index.html**: The home page of the application. No query-string parameters.

2. **issue-list.html**: The page that displays a list of all issues. Query-string parameters:
    - `search`: The search query to filter issues by title or description.
    - `status`: The status to filter issues by (Open, In Progress, Closed).
    - `assignedTo`: The user to filter issues by who they are assigned to.

3. **issue-details.html**: The page that displays the details of a specific issue. Query-string parameters:
    - `id`: The ID of the issue to display.

4. **create-issue.html**: The page that allows users to create a new issue. No query-string parameters.

5. **edit-issue.html**: The page that allows users to edit an existing issue. Query-string parameters:
    - `id`: The ID of the issue to edit.

6. **user-profile.html**: The page that displays the profile of a specific user. Query-string parameters:
    - `username`: The username of the user to display.

7. **login.html**: The page that allows users to log in. No query-string parameters.

8. **register.html**: The page that allows users to register a new account. No query-string parameters.

Please note that the `id` and `username` parameters should be properly URL-encoded to ensure that they can be correctly interpreted by the server.

