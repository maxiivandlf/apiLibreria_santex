const { userModel } = require('../models');

const getUser = async (id) => {
  try {
    const user = await userModel.User.findByPk(id);
    return user;
  } catch (error) {
    console.log('Error getting user', error);
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await userModel.User.create(user);
    return newUser;
  } catch (error) {
    console.log('Error creating user', error);
    throw error;
  }
};

module.exports = { getUser, createUser };
