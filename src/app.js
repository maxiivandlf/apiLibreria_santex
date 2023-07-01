const express = require('express');

const PORT = 3005;
const { routerBook, routerLibrary } = require('./routes');

// Middleware
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Llamando a ${req.url} con el metodo ${req.method} `);
  next();
});

app.get('/user', (req, res) => {
  res.send('hola');
});
app.use('/library', routerLibrary);

app.use('/book', routerBook);

app.listen(PORT, () => {
  console.log(`Server corriendo en: ${PORT}`);
});
