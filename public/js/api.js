export async function getIssues({ search, status, assignedTo, page, pageSize }) {
  const url = new URL('/api/issue', location.origin);

  if (search) {
      url.searchParams.append('search', search);
  }

  if (status) {
      url.searchParams.append('status', status);
  }

  if (assignedTo) {
      url.searchParams.append('assignedTo', assignedTo);
  }

  if (page) {
      url.searchParams.append('page', page);
  }

  if (pageSize) {
      url.searchParams.append('pageSize', pageSize);
  }

  const response = await fetch(url);

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function getUsers() {
  // TODO: Implement this function according to your API's specifications.
  return [];
}