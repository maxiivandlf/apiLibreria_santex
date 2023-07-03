const express = require('express');
const { initializeDB } = require('./config/dbConfig');
const {
  routerBook,
  routerLibrary,
  routerUser,
  routerAuth,
} = require('./routes');

const PORT = 3005;

// Middleware
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Llamando a ${req.url} con el metodo ${req.method} `);
  next();
});

app.use('/users', routerUser);
app.use('/library', routerLibrary);
app.use('/book', routerBook);
app.use('/login', routerAuth);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server corriendo en: ${PORT}`);
});
