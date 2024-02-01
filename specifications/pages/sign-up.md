# Sign Up Page Specification

## Page Title
"Sign Up"

## Form Title
"Create a New Account"

## Form Fields

1. **Username**
   - Label: "Username"
   - Input type: text
   - Placeholder: "Enter your username"
   - Validation: Must be unique. If not, display error message "This username is already taken. Please choose another one."

2. **Password**
   - Label: "Password"
   - Input type: password
   - Placeholder: "Enter your password"
   - Validation: Must contain at least 12 characters, at least one number, and one special character. If not, display error message "Your password must contain at least 12 characters, including at least one number and one special character."

3. **Confirm Password**
   - Label: "Confirm Password"
   - Input type: password
   - Placeholder: "Re-enter your password"
   - Validation: Must match the password field. If not, display error message "The passwords do not match. Please try again."

## Buttons

1. **Sign Up Button**
   - Text: "Sign Up"
   - Action: Submits the form. If form validation is successful, create a new user account and redirect to the login page with a success message "Your account has been created successfully. Please log in."

2. **Cancel Button**
   - Text: "Cancel"
   - Action: Clears the form and redirects to the login page.

## Links

1. **Login Page Link**
   - Text: "Already have an account? Log in here."
   - Action: Redirects to the login page.

## Messages

1. **Success Message**
   - Text: "Your account has been created successfully. Please log in."
   - Displayed when: User account is created successfully.

2. **Error Message**
   - Text: Varies based on the error (see form field validation above)
   - Displayed when: There is a form validation error.