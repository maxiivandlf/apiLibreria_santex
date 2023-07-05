const { libraryService } = require('../services');

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    res.status(200).json(libraries);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las librerias',
    });
  }
};

const getLibraryById = async (req, res) => {
  try {
    const library = await libraryService.getLibraryById(req.params.libraryID);
    if (library) {
      res.status(200).json(library);
    } else {
      res.status(404).json({
        message: 'library not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener la libreria',
    });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const library = await libraryService.updateLibrary(
      req.params.libraryID,
      req.body
    );
    if (library) {
      res.status(200).json(library);
    } else {
      res.status(404).json({
        message: 'library not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar la libreria',
    });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryService.deleteLibrary(req.params.libraryID);
    res.status(200).json(library);
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar la libreria',
    });
  }
};

const createLibrary = async (req, res) => {
  try {
    const library = await libraryService.createLibrary(req.body);
    res.status(201).json(library);
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear la libreria',
    });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await libraryService.createBook(
      req.params.libraryID,
      req.body
    );
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el libro',
    });
  }
};

module.exports = {
  getAllLibraries,
  deleteLibrary,
  updateLibrary,
  createLibrary,
  getLibraryById,
  createBook,
};
