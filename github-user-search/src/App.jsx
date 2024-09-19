import React, { useState } from 'react';
import './App.css';
import UserSearch from './components/UserSearch'; // Remove if not needed
import UserList from './components/UserList';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';
import UserProfile from './components/UserProfile'; // Assuming UserProfile exists

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]); // Remove if not needed (for basic search)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (term) => { // For searching users (optional)
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      const data = await response.json();
      setUsers(data.items); // Assuming the API response structure has `items`
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred while searching users. Please try again later.');
    }
  };

  const handleUserSearch = async (username) => { // For searching user profile
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
        <Search onSearch={handleSearch} /> {/* Optional for general user search */}
        <UserSearch onSearch={handleUserSearch} /> {/* For searching user profile */}
        <UserList users={users} /> {/* Optional for displaying search results */}
      </div>

      <h1>GitHub User Search</h1>

      {/* Display user profile or search results */}
      {userData && <UserProfile userData={userData} />} {/* If using UserProfile */}
      {/* Or display loading message/error/search results (if using UserList) */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

    </div>
  );
}

export default App;