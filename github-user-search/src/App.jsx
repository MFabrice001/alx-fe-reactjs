import React from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const handleSearch = async (username, location, minRepos) => {
    try {
      const data = await fetchUserData(username, location, minRepos);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
