const { bookService } = require('../services');

const createBook = async (req, res) => {
  try {
    // console.log(`El usuario que creo el libro es ${req.user.role}`);
    const newBook = await bookService.creatBook(req.body);
    res.status(201).json({ newBook });
  } catch (error) {
    res.status(404).json({
      action: 'createBook',
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { bookID } = req.params;
    const book = await bookService.getBookById(bookID);
    res.status(200).json({ book });
  } catch (error) {
    res.status(404).json({
      action: 'Book not found',
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({
      action: 'Books not found',
    });
  }
};

const upDateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.bookID, req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({
      action: 'Book not found',
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { bookID } = req.params;
    const book = await bookService.deleteBook(bookID);
    if (book === 1) {
      res.status(200).json({
        action: 'Book deleted',
      });
    } else {
      res.status(404).json({
        action: 'Book not found',
      });
    }
  } catch (error) {
    res.status(404).json({
      action: 'Book not found',
    });
  }
};
module.exports = {
  createBook,
  getBookById,
  upDateBook,
  getAllBooks,
  deleteBook,
};
