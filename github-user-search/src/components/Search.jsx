import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setSearchResults([]);

    // Replace with your actual API call (e.g., GitHub API)
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setSearchResults(data.items);
      })
      .catch((error) => {
        setIsLoading(false);
        setError('An error occurred while searching users. Please try again later.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GitHub Users"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;