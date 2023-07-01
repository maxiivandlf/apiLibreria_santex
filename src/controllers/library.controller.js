const { libraryService } = require('../services');

const getLibrary = (req, res) => {
  res.send('estas son las librerias');
};

const updateLibrary = (req, res) => {
  res.send('actualizano librerias');
};

const deleteLibrary = (req, res) => {
  //   res.send('borrando librerias');
  res.status(202).json({
    message: 'libreria eliminada',
    id: req.params.libraryID,
  });
};

const createLibrary = (req, res) => {
  res.send(libraryService.createLibrary());
};
module.exports = { getLibrary, deleteLibrary, updateLibrary, createLibrary };
