# Specification Document for the Issues List Page

## Page Structure

The Issues List Page is divided into three main sections:

1. **Search and Filter Section**: This section is located at the top of the page and allows users to search for specific issues and filter issues based on certain criteria.

2. **Issues List Section**: This section displays a list of issues. Each issue is represented as a row in a table. The table has the following columns: Issue ID, Title, Status, Assigned To, and Actions.

3. **Pagination Section**: This section is located at the bottom of the page and allows users to navigate through different pages of issues.

## Field Details

### Search and Filter Section

- **Search Field**: Allows users to enter a search query. Maximum length is 100 characters.
- **Filter Dropdowns**: Allows users to filter issues based on Status (Open, In Progress, Closed) and Assigned To (list of users).

### Issues List Section

- **Title**: The title of the issue. Maximum length is 100 characters.
- **Status**: The current status of the issue. Options are Open, In Progress, and Closed.
- **Assigned To**: The user who is currently assigned to the issue. This field is editable only by admins.
- **Actions**: Contains buttons for viewing issue details, editing the issue (only visible to the user who created the issue and admins), and closing the issue (only visible to admins).

### Pagination Section

- **Page Numbers**: Shows the current page number and total number of pages.
- **Navigation Buttons**: Allows users to go to the First, Previous, Next, and Last page.

## Text Labels

- **Page Title**: "Issues List"
- **Search Field Placeholder**: "Search issues..."
- **Filter Labels**: "Filter by Status", "Filter by Assigned To"
- **Table Headers**: "Issue ID", "Title", "Status", "Assigned To", "Actions"
- **Action Buttons**: "View Details", "Edit", "Close"
- **Pagination Labels**: "First", "Previous", "Next", "Last"