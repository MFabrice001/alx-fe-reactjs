
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService'; // Assume this function fetches user data from GitHub API

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError(''); // Clear any previous errors
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      {/* Render the search form */}
      <Search onSearch={handleSearch} />

      {/* Conditional rendering based on the state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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

export default App;
