import React, { useState } from 'react';
import './App.css'; // Assuming App.css exists for styling
import UserSearch from './components/UserSearch';
import UserList from './components/UserList';
// Import the correct function from the appropriate service
import { fetchUserData } from './services/githubService'; // Adjust path if needed

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (term) => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      const data = await response.json();
      setUsers(data.items); // Assuming the API response structure has `items`
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred while searching users. Please try again later.');
    }
  };

  const handleUserSearch = async (username) => { // Renamed for clarity
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError('Looks like we can’t find the user.');
      setUserData(null); // Clear user data on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div>
        <UserSearch onSearch={handleSearch} />
        <UserList users={users} />
      </div>

      <h1>GitHub User Search</h1>

      {/* Use the Search component (if it serves a different purpose) */}
      {/* <Search onSearch={handleSearch} /> */}  <-- Comment out if not needed

      {/* Display loading message, error, or user data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" width="100" />
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