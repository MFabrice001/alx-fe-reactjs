import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await onSearch({ searchTerm, location, minRepos }); // Call the parent search function with all search parameters
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user"); // Error message added here
    } finally {
      setLoading(false); // Stop loading indicator
    }

    // Reset the input fields
    setSearchTerm('');
    setLocation('');
    setMinRepos('');
  };

  return (
    <div className="p-4">
      {/* Search form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded">
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p>{error}</p>} {/* Error message displayed here */}

      {/* User data display */}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="User avatar" width="100" />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
