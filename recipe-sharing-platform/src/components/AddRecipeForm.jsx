import React, { useState, useEffect } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);   

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields   

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field], newErrors);
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData);
    }
  };

  const validateField = (field, value, errors = {}) => {
    let errorMessage = '';
    switch (field) {
      case 'title':
        if (!value) {
          errorMessage = 'Title is required.';
        }
        break;
      case 'ingredients':
        if (!value) {
          errorMessage = 'Ingredients are required.';
        } else if (value.split(',').length < 2) {
          errorMessage = 'Please enter at least two ingredients.';
        }
        break;
      case 'steps':
        if (!value) {
          errorMessage = 'Preparation steps are required.';
        }
        break;
      default:
        break;
    }

    errors[field] = errorMessage;
    setErrors(errors);
  };

  return (
    <div className="container mx-auto p-4">
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
            className={`w-full px-3 py-2 border   
 rounded-lg ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
            className={`w-full px-3 py-2 border rounded-lg ${errors.ingredients ? 'border-red-500' : ''}`}
            rows="5"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
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
            className={`w-full px-3 py-2 border rounded-lg ${errors.steps ? 'border-red-500' : ''}`}
            rows="10"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;