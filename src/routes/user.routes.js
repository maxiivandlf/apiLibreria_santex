const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

// router.post('/:userID');
router.get('/', userController.getAllUsers);
router.get('/:userID', userController.getUserById);
router.post('/', userController.createUser);
router.post('/:userID/tickets', userController.createTicket);

module.exports = router;
