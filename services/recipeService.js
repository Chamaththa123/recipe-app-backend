const axios = require('axios');

//get categories service
const fetchCategories = async () => {
    //get categries from public api
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

  return response.data.categories;
};

//get recipe by category service
const fetchRecipesByCategory = async (categoryName) => {

  //get recipes by category name from public api
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`
  );
  return response.data.meals;
};


//get recipe details by id service
const fetchRecipeById = async (id) => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.data.meals ? response.data.meals[0] : null;
};

module.exports = { fetchCategories,fetchRecipesByCategory,fetchRecipeById };