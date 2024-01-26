# Home Screen Requirements

The home screen of our application is the first page users see after logging in. It should provide a clear overview of the system's current state and allow users to navigate to different parts of the application.

## Layout

The home screen is divided into two main sections:

1. **Navigation Bar**: This is located at the top of the screen and includes links to other parts of the application.
2. **Issue Table**: This is the main part of the screen and displays a list of issues.

## Navigation Bar

The navigation bar should include the following elements:

- **Logo**: Clicking on the logo should always bring the user back to the home screen.
- **New Issue Button**: This button should be labeled "New Issue" and should navigate to the issue creation screen when clicked.
- **User Profile**: This should display the current user's name and avatar. Clicking on it should open a dropdown with options to view the profile and log out.

## Issue Table

The issue table should display the following columns:

1. **ID**: The unique identifier of the issue.
2. **Title**: The title of the issue.
3. **Status**: The current status of the issue (e.g., Open, In Progress, Closed).
4. **Assigned To**: The name of the user currently assigned to the issue.
5. **Last Updated**: The date and time when the issue was last updated.

Each row in the table should be clickable. Clicking on a row should navigate to the detail view for that issue.

## Buttons in Issue Table

Each row in the issue table should also include the following buttons:

- **Edit Button**: Clicking this should navigate to the edit screen for that issue.
- **Delete Button**: Clicking this should open a confirmation dialog. If the user confirms, the issue should be deleted.

Please ensure all labels and user-facing text are properly internationalized and accessible.