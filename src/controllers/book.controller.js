const { bookService } = require('../services');

const createBook = (req, res) => {
  try {
    const newBook = bookService.creatBook(req.params.bookID, req.body);
    res.send(newBook);
  } catch (error) {
    res.status(404).json({
      action: 'createBook',
      error: error.message,
    });
  }
};

const getBook = (req, res) => {
  res.send(req.params.bookID);
};

const upDateBook = (req, res) => {
  res.json({ id: req.params.bookID, ...req.body });
};

module.exports = {
  createBook,
  getBook,
  upDateBook,
};
