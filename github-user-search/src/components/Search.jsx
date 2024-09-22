import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]); // Changed to hold multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]); // Clear previous results

    try {
      const data = await fetchUserData(searchTerm, location, minRepos);
      //const data = await onSearch(searchTerm, location, minRepos);
      setUsers(data); // Updated to set multiple users
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }

    setSearchTerm(''); // Clear input after submission
    setLocation('');
    setMinRepos('');
  };

  return (
    <div className="p-4">
      {/* Search Form */}
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

      {/* Loading State */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* No Results Found */}
      {!loading && users.length === 0 && !error && (
        <p className="text-center">No users found. Try different search criteria.</p>
      )}

      {/* User Data Display */}
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex flex-col sm:flex-row items-center">
            <img src={user.avatar_url} alt="User avatar" className="w-24 h-24 rounded-full mr-4" />
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold">{user.login}</h2>
              <p className="text-gray-700">{user.bio}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
