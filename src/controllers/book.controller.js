const createBook = (req, res) => {
  res.send('hola desde books');
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
