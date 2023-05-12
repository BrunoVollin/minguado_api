const User = require('../models/user');
const Quest = require('../models/quest');
const { generateToken } = require('../middlewares/authMiddleware.JS');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { name, password } = req.query;
  console.log({ name, password });
  try {
    const user = await User.find({ name, password })
    if (!user || user.length === 0)  throw new Error('User not found');
    //jwt
   const token = generateToken({ name, password });
    res.status(200).json({user, token});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
