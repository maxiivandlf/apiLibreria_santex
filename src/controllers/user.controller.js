const { usersService } = require('../services');

const getUsers = async (req, res) => {
  try {
    const user = await usersService.getUser(req.params.userID);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener usuario', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const newUser = await usersService.createUser(body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log('create user error', error);
    res
      .status(500)
      .json({ message: 'Error al crear usuario', error: error.message });
  }
};

const createTicket = async (req, res) => {
  try {
    const newTicket = await usersService.createTicket(
      req.params.userID,
      req.body
    );
    res.status(200).json(newTicket);
  } catch (error) {
    console.log('create ticket error', error);
    res
      .status(500)
      .json({ message: 'Error al crear ticket', error: error.message });
  }
};

module.exports = { getUsers, createUser, createTicket };
