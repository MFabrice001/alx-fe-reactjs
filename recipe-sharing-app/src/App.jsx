import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* Dynamic route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
