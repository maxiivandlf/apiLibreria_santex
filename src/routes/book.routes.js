const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authJWTMiddleware } = require('../middleware/auth.middleware');

router.post('/', authJWTMiddleware, bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:bookID', bookController.getBookById);
router.put('/:bookID', authJWTMiddleware, bookController.upDateBook);
router.delete('/:bookID', authJWTMiddleware, bookController.deleteBook);

module.exports = router;
