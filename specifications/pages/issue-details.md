# Issue Detail Page Specification

## Structure

The Issue Detail Page is divided into several sections:

1. **Issue Information**: This section displays the title, description, status, creator and assignee of the issue. The title has a maximum length of 100 characters. The status is a dropdown with options: 'Open', 'In Progress', 'Closed'. The creator field is a readonly field displaying the username of the issue creator.

2. **Comments Section**: This section lists all comments related to the issue. Each comment displays the commenter's username, the comment text, and the date/time the comment was posted. The comment text has a maximum length of 500 characters.

3. **New Comment Form**: This section allows users to post new comments. It contains a text input field for the comment text and a 'Post Comment' button.

## Buttons

- **Post Comment Button**: Allows users to post a new comment. Clicking this button adds the comment to the Comments Section and clears the New Comment Form.

## Readonly Fields

- **Creator Field**: This field in the Issue Information section is readonly and displays the username of the issue creator.

- **Comment Fields**: The username and comment text fields in the Comments Section are readonly.