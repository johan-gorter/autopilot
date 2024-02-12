# Specification Document for the Issues List Page

## Page Structure

The Issues List Page is divided into three main sections:

1. **Search and Filter Section**: This section is located at the top of the page and allows users to search for specific issues and filter issues based on certain criteria. A button to create a new issue is also located in this section. The section should take up as little space as possible.

2. **Issues List Section**: This section displays a list of issues. Each issue is represented as a row in a table. The table has the following columns: Issue ID, Title, Status, and Assigned To.

3. **Pagination Section**: This section is located at the bottom of the page and allows users to navigate through different pages of issues.

## Field Details

### Search and Filter Section

- **Search Field**: Allows users to enter a search query. Maximum length is 100 characters. Used to find issues that contain the search query in their title or description.
- **Filter Dropdowns**: Allows users to filter issues based on Status (Open, In Progress, Closed) and Assigned To (list of users).
- **Create issue**: A button that leads to the [create issue page](create-issue.md).

### Issues List Section

- **Title**: The title of the issue. Maximum length is 100 characters.
- **Status**: The current status of the issue. Options are Open, In Progress, and Closed.

When a user clicks on an issue, they are taken to the [Issue Details Page](issue-details.md) for that issue.

### Pagination Section

- **Navigation Buttons**: Allows users to go to the Previous and Next page.

## Text Labels

- **Page Title**: "Issues List"
- **Search Field Placeholder**: "Search issues..."
- **Filter Labels**: "Filter by Status", "Filter by Assigned To"
- **Table Headers**: "Issue ID", "Title", "Status", "Assigned To"
- **Pagination Labels**: "Previous", "Next"