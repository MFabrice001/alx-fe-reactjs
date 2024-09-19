import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm)
      .catch(() => {
        setError("Looks like we can't find the user");
      });
    setSearchTerm(''); // Clear search term after submission
  };

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GitHub Users"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error state */}
      {error && <p>{error}</p>} {/* Display error message */}

    </div>
  );
}

export default Search;
