const { registerUser, loginUser } = require("../services/userService.js");

//user registration controller
const register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    //email validaiton
    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

    // Password validation: min 6 chars, 1 uppercase, 1 number, 1 special char
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character.",
      });
    }

    await registerUser({ full_name, email, password });
    res.status(201).json("User is registered successfully!!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//user login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //email validaiton
    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

    //password validaiton
    if (!password) {
      return res.status(400).json({ error: "Password is required." });
    }
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
