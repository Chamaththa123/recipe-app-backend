const { addFavorite, removeFavorite, getFavorites } = require("../services/favoriteRecipeService");

const addFavoriteRecipe = async (req, res) => {
  try {
    const recipe = req.body;
    const favorites = await addFavorite(req.user.id, recipe);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const removeFavoriteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const favorites = await removeFavorite(req.user.id, recipeId);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserFavorites = async (req, res) => {
  try {
    const favorites = await getFavorites(req.user.id);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addFavoriteRecipe, removeFavoriteRecipe, getUserFavorites };