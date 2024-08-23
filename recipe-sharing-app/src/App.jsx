import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations(); // Generate recommendations on app load
  }, [generateRecommendations]);

  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
