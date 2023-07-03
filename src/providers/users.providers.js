const { Op } = require('sequelize');
const { userModel, ticketModel } = require('../models');

const getUser = async (id) => {
  try {
    const user = await userModel.findByPk(id, { include: { all: true } });
    return user;
  } catch (error) {
    console.log('Error getting user', error);
    throw error;
  }
};

// const getUserByCriteria = async (criteria) => {
//   try {
//     const user = await userModel.findAll({
//       where: {
//         [Op.or]: [{ email: criteria.email }, { firstName: criteria.firstName }],
//       },
//       include: { all: true },
//     });
//     return user;
//   } catch (error) {
//     console.log('Error when validating user', error);
//     throw error;
//   }
// };

const validateUser = async (options) => {
  try {
    const userFound = await userModel.findAll({
      where: {
        email: options.user,
        password: options.password,
      },
    });
    if (userFound.length !== 0) {
      return userFound;
    }
    return false;
  } catch (error) {
    console.log('Error when validating user', error);
    return false;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    console.log('Error creating user', error);
    throw error;
  }
};

const createTicket = async (userid, ticket) => {
  try {
    const newTicket = await ticketModel.create({ ...ticket, UserId: userid });
    return newTicket;
  } catch (error) {
    console.log('Error creating ticket', error);
    throw error;
  }
};

module.exports = { getUser, createUser, createTicket, validateUser };
