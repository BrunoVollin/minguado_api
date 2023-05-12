const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authentication failed' });
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

exports.generateToken = ({ name, password }) => {
  const token = jwt.sign({ user: { name, password } }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}