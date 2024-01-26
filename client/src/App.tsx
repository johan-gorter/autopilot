import React, { useState, useEffect } from 'react';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('/issues')
      .then(response => response.json())
      .then(data => setIssues(data));
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="App-header text-center py-5">
        <h1 className="text-4xl font-bold text-blue-600">Issue Management System</h1>
        {issues.length > 0 ? (
          <ul className="mt-5">
            {issues.map((issue, index) => (
              <li key={index} className="bg-white shadow rounded-lg p-5 mb-4">
                <h2 className="text-2xl font-semibold text-gray-700">{issue.title}</h2>
                <p className="text-gray-600">{issue.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-lg text-gray-500">No issues found.</p>
        )}
      </header>
    </div>
  );
}

export default App;