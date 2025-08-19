const { registerUser, loginUser } = require("../services/userService.js");

const register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;
    console.log(full_name);
    await registerUser({ full_name, email, password });
    res.status(201).json("User is registered successfully!!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
