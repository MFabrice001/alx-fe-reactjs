import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
     <Router>
     <Routes>
       <Route path="/" element={<RecipeList />} />
       <Route path="/recipe/:id" element={<RecipeDetails />} />
     </Routes>
   </Router>
  );
}

export default App;
