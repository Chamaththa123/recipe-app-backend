import { registerUser, loginUser } from "../services/userService.js";

export const register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;
    console.log(full_name)
    await registerUser({ full_name, email, password });
    res.status(201).json("User is registed succesfully!!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
