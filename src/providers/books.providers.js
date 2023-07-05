const { bookModel } = require('../models');

const creatBook = async (book) => {
  try {
    const newBook = await bookModel.create(book);
    return newBook;
  } catch (error) {
    console.log('Error creating book', error);
    throw error;
  }
};

const getAllBooks = async () => {
  try {
    const books = await bookModel.findAll();
    return books;
  } catch (error) {
    console.log('Error getting books', error);
    throw error;
  }
};

const getBookById = async (id) => {
  try {
    const book = await bookModel.findByPk(id);
    return book;
  } catch (error) {
    console.log('Error getting book', error);
    throw error;
  }
};

const updateBook = async (id, book) => {
  try {
    const updatedBook = await bookModel.update(
      {
        isbn: book.isbn,
        title: book.title,
        autor: book.autor,
        year: book.year,
        LibraryId: book.libraryId,
      },
      { where: { id: id } }
    );
    return updatedBook;
  } catch (error) {
    console.log('Error updating book', error);
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await bookModel.destroy({ where: { id: id } });
    return deletedBook;
  } catch (error) {
    console.log('Error deleting book', error);
    throw error;
  }
};

module.exports = {
  creatBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
