const express = require('express');
const { bookController } = require('../controllers');

const router = express.Router();

router.post('/:bookID', bookController.createBook);

router.get('/:bookID', bookController.getBook);
router.put('/:bookID', bookController.upDateBook);

module.exports = router;
