const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  favorites: [
    {
      idMeal: String,
      strMeal: String,
      strMealThumb: String,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
