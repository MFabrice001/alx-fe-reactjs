import { useState } from 'react';
import './App.css';
import { fetchUser } from './services/githubApi';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';


function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchUser(username);
      setUserData(data);
      setError('');
    } catch (err) {
      setError('User not found or an error occurred');
      setUserData(null);
    }
  };

  return (
    <>
      <div>
        <h1>GitHub User Search</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearch}>Search</button>

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
    </>
  );
}

export default App;
