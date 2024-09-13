import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON file
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-600 mt-4 block">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
