const { SERVER_SECRET } = require('../middleware/auth.middleware');

const { usersService } = require('../services');

const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { user, password } = req.body;

  if (user === 'admin' && password === 'admin') {
    const token = jwt.sign({ user, role: 'Admin' }, SERVER_SECRET);
    res.status(200).json({ token });
  } else {
    const userFound = await usersService.validateUser({ user, password });
    if (userFound) {
      const token = jwt.sign({ user, role: 'User' }, SERVER_SECRET);
      return res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  }
};
module.exports = { signup };
