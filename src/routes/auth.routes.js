const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.post('/', authController.signup);

module.exports = router;
