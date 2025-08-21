const axios = require('axios');

const fetchCategories = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.data.categories;
};

const fetchRecipesByCategory = async (categoryName) => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`
  );
  return response.data.meals; // array of meals
};

module.exports = { fetchCategories,fetchRecipesByCategory };