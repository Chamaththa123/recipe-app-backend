const { fetchCategories,fetchRecipesByCategory } = require('../services/recipeService');

const getCategories = async (req, res) => {
  try {
    console.log('test')
    const categories = await fetchCategories();
    res.status(200).json(categories.slice(0, 5));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  try {
    const meals = await fetchRecipesByCategory(category);
    if (!meals) {
      return res.status(404).json({ message: "No recipes found for this category" });
    }
    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

module.exports = { getCategories,getRecipesByCategory };