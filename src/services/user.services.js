const { userProvider } = require('../providers');

const createUser = async (user) => {
  const newUser = await userProvider.createUser(user);
  return newUser;
};

const getAllUsers = async () => {
  const users = await userProvider.getAllUsers();
  return users;
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  return user;
};

const createTicket = async (userid, ticket) => {
  const user = await userProvider.getUser(userid);
  if (user) {
    const newTicket = await userProvider.createTicket(userid, ticket);
    return newTicket;
  }
  return null;
};

const validateUser = async ({ user, password }) => {
  const validUser = await userProvider.validateUser({ user, password });
  return validUser;
};

module.exports = {
  createUser,
  getUser,
  createTicket,
  validateUser,
  getAllUsers,
};
