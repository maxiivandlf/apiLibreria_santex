const express = require('express');
const { libraryController } = require('../controllers');
const { authJWTMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', authJWTMiddleware, libraryController.createLibrary);
router.get('/:libraryID', libraryController.getLibraryById);
router.get('/', libraryController.getAllLibraries);
router.put('/:libraryID', authJWTMiddleware, libraryController.updateLibrary);
router.delete(
  '/:libraryID',
  authJWTMiddleware,
  libraryController.deleteLibrary
);
router.post(
  '/:libraryID/book',
  authJWTMiddleware,
  libraryController.createBook
);

module.exports = router;
