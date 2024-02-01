# ai-generated-issue-management-system
This is an issue management system where users can create new issues, comment on issues and change the status of issues.

# Client
Files served to the client are in the public/ folder. All page urls end with .html 

We use static html files to create the frontend, styled using materialize css and use vanilla javascript to load the data. 
We also use htmx to split up the html into smaller components. This is done using the `hx-get` and `hx-trigger="load"` attribute.
Common elements like the user-menu and footer can be found in the partials/ folder.
All pages include a consistent header and footer.

# Template

# Sitemap

1. **Home Page**
    - URL: `/index.html`

2. **Issues List Page**
    - URL: `/issues.html`
    - Query-string parameters:
        - `search`: for searching issues, e.g., `/issues.html?search=bug`
        - `status`: for filtering by status, e.g., `/issues.html?status=open`
        - `assignedTo`: for filtering by assignee, e.g., `/issues.html?assignedTo=johndoe`

3. **Issue Details Page**
    - URL: `/issue-details.html`
    - Query-string parameters:
        - `id`: for specifying the issue, e.g., `/issue-details.html?id=123`

4. **Create Issue Page**
    - URL: `/create-issue.html`

5. **Edit Issue Page**
    - URL: `/edit-issue.html`
    - Query-string parameters:
        - `id`: for specifying the issue to edit, e.g., `/edit-issue.html?id=123`

6. **User Menu**
    - URL: `/partials/user-menu.html`

7. **Footer**
    - URL: `/partials/footer.html`
