const { libraryModel, bookModel } = require('../models');

const getAllLibraries = async () => {
  try {
    const libraries = await libraryModel.findAll();
    return libraries;
  } catch (error) {
    console.log('Error getting all libraries', error);
    throw error;
  }
};

const getLibraryById = async (id) => {
  try {
    const library = await libraryModel.findByPk(id, { include: { all: true } });
    return library;
  } catch (error) {
    console.log('Error getting library by id', error);
    throw error;
  }
};

const createLibrary = async (library) => {
  try {
    const newLibrary = await libraryModel.create(library);
    return newLibrary;
  } catch (error) {
    console.log('Error creating library', error);
    throw error;
  }
};

const updateLibrary = async (id, library) => {
  try {
    const updatedLibrary = await libraryModel.update(
      {
        name: library.name,
        location: library.location,
        telefono: library.telefono,
      },
      {
        where: { id: id },
      }
    );
    return updatedLibrary;
  } catch (error) {
    console.log('Error updating library', error);
    throw error;
  }
};

const deleteLibrary = async (id) => {
  try {
    const deletedLibrary = await libraryModel.destroy({
      where: { id: id },
    });
    return deletedLibrary;
  } catch (error) {
    console.log('Error deleting library', error);
    throw error;
  }
};

const createBook = async (libraryiId, book) => {
  try {
    const newBook = await bookModel.create({
      ...book,
      LibraryId: libraryiId,
    });
    return newBook;
  } catch (error) {
    console.log('Error creating book');
    throw error;
  }
};
module.exports = {
  getAllLibraries,
  getLibraryById,
  updateLibrary,
  createLibrary,
  deleteLibrary,
  createBook,
};
