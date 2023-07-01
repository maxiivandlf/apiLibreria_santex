const express = require('express');
const { libraryController } = require('../controllers');

const router = express.Router();

router.post('/', libraryController.createLibrary);

router.get('/', libraryController.getLibrary);
router.put('/:libraryID', libraryController.updateLibrary);
router.delete('/:libraryID', libraryController.deleteLibrary);

module.exports = router;
