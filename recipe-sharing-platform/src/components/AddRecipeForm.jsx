import React, { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.ingredients || !formData.steps) {
        alert('Please fill out all fields.');
        return;
      }
  
      
      if (formData.ingredients.split(',').length < 2) {
        alert('Please enter at least two ingredients.');
        return;
      }
   
 here
    console.log(formData);
  };

  return (
    <div className="container   
 mx-auto p-4">
      <h2 className="text-2xl font-bold">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"   

            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border   
 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
            Ingredients
          </label>
          <textarea   

            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;