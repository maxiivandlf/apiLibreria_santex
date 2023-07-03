const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const {
  authJWTMiddleware,
  userIsAdminMDW,
} = require('../middleware/auth.middleware');

router.post(
  '/:bookID',
  authJWTMiddleware,
  userIsAdminMDW,
  bookController.createBook
);

router.get('/:bookID', bookController.getBook);
router.put('/:bookID', authJWTMiddleware, bookController.upDateBook);

module.exports = router;
