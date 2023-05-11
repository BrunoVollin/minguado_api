const User = require('../models/user');

exports.validateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return false;
  const validPassword = await user.checkPassword(password);
  if (!validPassword) return false;
  return user;
};