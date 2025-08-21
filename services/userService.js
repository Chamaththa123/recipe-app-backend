const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const { generateToken } = require("../utils/jwtToken.js");

//user registration service
const registerUser = async ({ full_name, email, password }) => {
  // check whether user already exists
  const existing_user = await userModel.findOne({ email });

  if (existing_user) {
    throw new Error("This email is already registered.");
  }

  //generate salt for hashing
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new userModel({ full_name, email, passwordHash });
  await user.save();

  return {
    token: generateToken(user),
    user: {
      _id: user._id,
      full_name: user.full_name,
      email: user.email,
    },
  };
};

//user login service
const loginUser = async ({ email, password }) => {

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid user credentials.");
  }

  //compire entered password and original password
  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw new Error("Invalid user credentials.");
  }

  return {
    token: generateToken(user),
    user: {
      _id: user._id,
      full_name: user.full_name,
      email: user.email,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
};
