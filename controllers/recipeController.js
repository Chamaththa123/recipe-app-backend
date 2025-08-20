const { fetchCategories } = require('../services/recipeService');

const getCategories = async (req, res) => {
  try {
    const categories = await fetchCategories();
    res.status(200).json(categories.slice(0, 5));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getCategories };