const {
  addFavorite,
  removeFavorite,
  getFavorites,
} = require("../services/favoriteRecipeService");

//add favourite recipe controller
const addFavoriteRecipe = async (req, res) => {
  try {
    const recipe = req.body;
    const loggedUserId = req.user.id;
    // Validate the recipe data
    if (!recipe || !recipe.idMeal || !recipe.strMeal || !recipe.strMealThumb) {
      return res.status(400).json({
        message:
          "Invalid recipe data. idMeal, strMeal, and strMealThumb are required.",
      });
    }
    const favorites = await addFavorite(loggedUserId, recipe);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete favourite recipe controller
const removeFavoriteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const loggedUserId = req.user.id;

    //id valdiaiton
    if (!recipeId) {
      return res.status(400).json({ message: "Id is required" });
    }

    const favorites = await removeFavorite(loggedUserId, recipeId);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get favourite recipe list for user controller
const getUserFavorites = async (req, res) => {
  try {
    const loggedUserId = req.user.id;
    const favorites = await getFavorites(loggedUserId);
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addFavoriteRecipe, removeFavoriteRecipe, getUserFavorites };
