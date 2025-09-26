const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Try creating the user directly
    const user = await User.create({ email, password });
    
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (err) {
    // Handle duplicate key (email already exists)
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    console.error("Register error:", err); 
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    console.error("Login error:", err); 
    res.status(500).json({ error: "Server error" });
  }
};
