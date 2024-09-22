import React, { useState } from 'react';
import './styles.css';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = `q=${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+min_public_repos:${minRepos}`;
    onSearch(query);
    setSearchTerm('');
    setLocation('');
    setMinRepos(0);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Search for GitHub user"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="search-filters">
        <div className="filter-item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Filter by location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="minRepos">Min Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="Minimum number of repositories"
            value={minRepos}
            onChange={(event) => setMinRepos(event.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Search;