const express = require("express");
const router = express.Router();
const {
  getCategories,
  getRecipesByCategory,
} = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/categories", authMiddleware, getCategories);
router.get("/:category", getRecipesByCategory);

module.exports = router;
