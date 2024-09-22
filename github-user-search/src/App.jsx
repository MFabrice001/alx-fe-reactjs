import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');

    try {
      const users = await fetch(`https://api.github.com/search/users?${query}`);
      const data = await users.json();
      setSearchResults(data.items);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred while searching users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchResults.length > 0 && (
        <ul className="results-list">
          {searchResults.map((user) => (
            <li key={user.id} className="result-item">
              <img src={user.avatar_url} alt={user.login} />
              <div className="user-info">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.login}
                </a>
                {user.location && <p>Location: {user.location}</p>}
                <p>Public Repositories: {user.public_repos}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;