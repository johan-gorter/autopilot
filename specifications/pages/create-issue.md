# Create Issue Page Specification

## Overview
The Create Issue Page is a crucial part of the issue management system. It allows users to create a new issue that needs to be addressed. 

## Fields

1. **Title**: A short, descriptive title for the issue. This field is mandatory. Maximum length is 100 characters.

2. **Description**: A detailed explanation of the issue. This field is mandatory. There is no maximum length.

## Buttons

1. **Submit**: Submits the form and creates the issue. This button is disabled until all mandatory fields are filled.

2. **Cancel**: Discards any changes and returns the user to the previous page.

## Error Handling

If the user attempts to submit the form without filling all mandatory fields, an error message should be displayed next to the relevant field(s), indicating that they need to be filled.

## Success Handling

Upon successful submission, the user should be redirected to the [issues list page](issue-list.md).
