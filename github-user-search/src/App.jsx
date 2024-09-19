import React from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      {/* Pass handleSearch as a prop to Search */}
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
