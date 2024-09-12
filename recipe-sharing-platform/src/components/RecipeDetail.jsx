import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe Image with shadow */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover mb-8 shadow-lg rounded-lg"
      />

      {/* Recipe Summary */}
      <div className="mb-8 p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>

      {/* Ingredients */}
      <div className="mb-8 p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          <li>2 eggs</li>
          <li>200g pasta</li>
          <li>100g bacon</li>
          <li>Parmesan cheese</li>
        </ul>
      </div>

      {/* Cooking Instructions */}
      <div className="p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal list-inside">
          <li>Cook the pasta according to package instructions.</li>
          <li>Fry the bacon until crispy.</li>
          <li>Whisk the eggs with Parmesan cheese.</li>
          <li>Combine everything and serve immediately.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
