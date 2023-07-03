const { authService } = require('../services');

const { SERVER_SECRET } = require('../middleware/auth.middleware');

const jwt = require('jsonwebtoken');

const signup = (req, res) => {
  const { user, password } = req.body;
  if (user === 'admin' && password === 'admin') {
    const token = jwt.sign({ user, role: 'Admin' }, SERVER_SECRET);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
module.exports = { signup };
