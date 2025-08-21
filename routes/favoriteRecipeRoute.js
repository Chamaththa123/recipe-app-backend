const express = require("express");
const router = express.Router();
const { addFavoriteRecipe, removeFavoriteRecipe, getUserFavorites } = require("../controllers/favoriteRecipeController");
const authMiddleware = require("../middleware/authMiddleware");

// Add a recipe to favorites
router.post("/", authMiddleware, addFavoriteRecipe);
router.delete("/:recipeId", authMiddleware, removeFavoriteRecipe);
router.get("/", authMiddleware, getUserFavorites);

module.exports = router;
