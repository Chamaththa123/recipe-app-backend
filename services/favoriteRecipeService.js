const userModel = require("../models/userModel.js");

const addFavorite = async (userId, recipe) => {
  const user = await userModel.findById(userId);

  if (!user) throw new Error("User not found");

  // check if recipe already in favorite list
  const exists = user.favorites.find((fav) => fav.idMeal === recipe.idMeal);
  if (exists) throw new Error("Recipe already in favorites");

  user.favorites.push(recipe);
  await user.save();

  return user.favorites;
};

const removeFavorite = async (userId, recipeId) => {
  const user = await userModel.findById(userId);

  if (!user) throw new Error("User not found");

  user.favorites = user.favorites.filter((fav) => fav.idMeal !== recipeId);
  await user.save();

  return user.favorites;
};

const getFavorites = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) throw new Error("User not found");
  return user.favorites;
};

module.exports = { addFavorite, removeFavorite, getFavorites };