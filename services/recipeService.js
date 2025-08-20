const axios = require('axios');

const fetchCategories = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.data.categories;
};

module.exports = { fetchCategories };