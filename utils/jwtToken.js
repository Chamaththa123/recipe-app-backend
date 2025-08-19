import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      firts_name: user.firts_name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
