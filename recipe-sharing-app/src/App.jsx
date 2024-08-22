import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
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
