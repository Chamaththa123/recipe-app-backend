const express = require("express");
const router = express.Router();
const {
  getCategories,
  getRecipesByCategory,
  getRecipeById,
} = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware"); // authentication middleware to protect routes

router.get("/categories", authMiddleware, getCategories); //get category route
router.get("/:category", authMiddleware, getRecipesByCategory); //get recipe by category route
router.get("/details/:id", authMiddleware, getRecipeById); // get recipe details by id

module.exports = router;
