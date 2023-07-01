const creatBook = (id, book) => {
  const message = {
    id: id,
    book: book,
  };
  return message;
};

const getAllBooks = () => {
  return 'Todos los libros';
};

module.exports = { creatBook, getAllBooks };
