const express = require("express");
const router = express.Router();
const {
  addFavoriteRecipe,
  removeFavoriteRecipe,
  getUserFavorites,
} = require("../controllers/favoriteRecipeController");
const authMiddleware = require("../middleware/authMiddleware"); // authentication middleware to protect routes

router.post("/", authMiddleware, addFavoriteRecipe); // Add a recipe to favorites route
router.delete("/:recipeId", authMiddleware, removeFavoriteRecipe); // remove recipe from favourite route
router.get("/", authMiddleware, getUserFavorites); // get favourite list accoding to the logged user route

module.exports = router;
