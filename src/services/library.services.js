const { libraryProvider } = require('../providers');

const createLibrary = async (library) => {
  const libraryCreated = await libraryProvider.createLibrary(library);
  return libraryCreated;
};
const getAllLibraries = async () => {
  const libraries = await libraryProvider.getAllLibraries();
  return libraries;
};

const getLibraryById = async (id) => {
  const library = await libraryProvider.getLibraryById(id);
  return library;
};

const updateLibrary = async (id, library) => {
  const libraryUpdated = await libraryProvider.updateLibrary(id, library);
  return libraryUpdated;
};

const deleteLibrary = async (id) => {
  const libraryDeleted = await libraryProvider.deleteLibrary(id);
  return libraryDeleted;
};

const createBook = async (libraryid, book) => {
  const library = await libraryProvider.getLibraryById(libraryid);
  console.log(library);
  if (library) {
    const newBook = await libraryProvider.createBook(libraryid, book);
    console.log(newBook);
    return newBook;
  }
  return null;
};

module.exports = {
  createLibrary,
  getLibraryById,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  createBook,
};
