import React, { useState, useEffect } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const fetchData = async () => {
        setIsLoading(true);
        setError('');
        try {
          const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
          const data = await response.json();
          setSearchResults(data.items);
        } catch (error) {
          setError('Looks like we cant find the user');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchTerm);
      }}>
        <input
          type="text"
          placeholder="fetchUserData"
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