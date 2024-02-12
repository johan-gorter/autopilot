// issue-list.js

import { getIssues, getUsers } from './api.js';

let currentPage = 1;
const pageSize = 10;

async function loadIssues() {
    const search = document.getElementById('search-field').value;
    const status = document.getElementById('status-filter').value;
    const assignedTo = document.getElementById('assigned-to-filter').value;

    const issues = await getIssues({ search, status, assignedTo, page: currentPage, pageSize });

    const issuesTableBody = document.getElementById('issues-list-table').querySelector('tbody');
    issuesTableBody.innerHTML = '';

    for (const issue of issues) {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = issue._id;
        row.appendChild(idCell);

        const titleCell = document.createElement('td');
        const titleLink = document.createElement('a');
        titleLink.href = `issue-details.html?id=${encodeURIComponent(issue._id)}`;
        titleLink.textContent = issue.title;
        titleCell.appendChild(titleLink);
        row.appendChild(titleCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = issue.status;
        row.appendChild(statusCell);

        const assignedToCell = document.createElement('td');
        assignedToCell.textContent = issue.assigneeId;
        row.appendChild(assignedToCell);

        issuesTableBody.appendChild(row);
    }
}

async function loadUsers() {
    const users = await getUsers();

    const assignedToFilter = document.getElementById('assigned-to-filter');
    for (const user of users) {
        const option = document.createElement('option');
        option.value = user._id;
        option.textContent = user.username;
        assignedToFilter.appendChild(option);
    }
}

document.getElementById('search-field').addEventListener('input', () => {
    currentPage = 1;
    loadIssues();
});

document.getElementById('status-filter').addEventListener('change', () => {
    currentPage = 1;
    loadIssues();
});

document.getElementById('assigned-to-filter').addEventListener('change', () => {
    currentPage = 1;
    loadIssues();
});

document.getElementById('previous-page-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadIssues();
    }
});

document.getElementById('next-page-button').addEventListener('click', () => {
    currentPage++;
    loadIssues();
});

loadUsers();
loadIssues();