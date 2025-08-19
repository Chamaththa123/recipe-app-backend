const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      full_name: user.full_name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

module.exports = {
  generateToken,
};
