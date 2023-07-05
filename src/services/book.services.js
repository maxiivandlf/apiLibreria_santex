const { bookProvider } = require('../providers');

const creatBook = async (book) => {
  const newBook = await bookProvider.creatBook(book);
  return newBook;
};

const getAllBooks = async () => {
  const books = await bookProvider.getAllBooks();
  return books;
};

const getBookById = async (id) => {
  const book = await bookProvider.getBookById(id);
  return book;
};

const updateBook = async (id, book) => {
  const updatedBook = await bookProvider.updateBook(id, book);
  return updatedBook;
};

const deleteBook = async (id) => {
  const deletedBook = await bookProvider.deleteBook(id);
  return deletedBook;
};

module.exports = {
  creatBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
