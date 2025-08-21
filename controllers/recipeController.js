const { fetchCategories,fetchRecipesByCategory, fetchRecipeById  } = require('../services/recipeService');

//get categories controller
const getCategories = async (req, res) => {
  try {
    const categories = await fetchCategories();

    // get first 5 categories
    const categoryList = categories.slice(0, 5)
    res.status(200).json(categoryList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//get recipe by category controller
const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  try {
    const meals = await fetchRecipesByCategory(category.trim());
    if (!meals) {
      return res.status(404).json({ message: "No recipes found for this category" });
    }
    res.status(200).json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

//get recipe details by id controller
const getRecipeById = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "id is required" });

  try {
    const meal = await fetchRecipeById(id);
    if (!meal) return res.status(404).json({ message: "Recipe not found" });

    res.json(meal);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching recipe details" });
  }
};

module.exports = { getCategories,getRecipesByCategory,getRecipeById };