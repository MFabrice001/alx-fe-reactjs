import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }

    // Submit logic here (e.g., sending the data to a server or updating state)
    console.log({ title, ingredients, steps });

    // Clear form and error after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-lg font-semibold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
