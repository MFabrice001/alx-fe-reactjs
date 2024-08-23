import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array to store favorite recipes' IDs
  addFavorite: (recipeId) => 
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [], // Array to store recommended recipes
  generateRecommendations: () =>
    set((state) => {
      // Example recommendation logic: Suggest recipes that are not in favorites
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
