import { useState } from 'react';
import './App.css';
import { fetchUser } from './services/githubApi';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError('Looks like we can’t find the user');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      
      {/* Use the Search component to handle input and submission */}
      <Search onSearch={handleSearch} />

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