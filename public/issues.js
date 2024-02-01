let issues = []; // Array to hold the issues fetched from the API
let currentPage = 1; // Variable to hold the current page number
let searchQuery = ''; // Variable to hold the search query
let statusFilter = ''; // Variable to hold the status filter
let assignedFilter = ''; // Variable to hold the assigned filter

document.addEventListener('DOMContentLoaded', function() {
  const searchField = document.getElementById('search-field');
  const statusFilterDropdown = document.getElementById('status-filter');
  const assignedFilterDropdown = document.getElementById('assigned-filter');
  const prevPageButton = document.getElementById('prev-page');
  const nextPageButton = document.getElementById('next-page');
  const issuesTableBody = document.getElementById('issues-table').tBodies[0];

  function fetchIssues() {
      const url = new URL('/api/issue', window.location.origin);
      const params = { page: currentPage, search: searchQuery, status: statusFilter, assignedTo: assignedFilter };
      Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]));

      fetch(url)
          .then(response => response.json())
          .then(data => {
              issues = data;
              renderIssues();
          });
  }

  function renderIssues() {
      issuesTableBody.innerHTML = '';
      issues.forEach(issue => {
          const row = issuesTableBody.insertRow();
          row.insertCell().textContent = issue.id;
          row.insertCell().textContent = issue.title;
          row.insertCell().textContent = issue.status;
          row.insertCell().textContent = issue.assignedTo;
      });
  }

  searchField.addEventListener('input', function() {
      searchQuery = this.value;
      fetchIssues();
  });

  statusFilterDropdown.addEventListener('change', function() {
      statusFilter = this.value;
      fetchIssues();
  });

  assignedFilterDropdown.addEventListener('change', function() {
      assignedFilter = this.value;
      fetchIssues();
  });

  prevPageButton.addEventListener('click', function() {
      currentPage = Math.max(1, currentPage - 1);
      fetchIssues();
  });

  nextPageButton.addEventListener('click', function() {
      currentPage++;
      fetchIssues();
  });

  fetchIssues();
});