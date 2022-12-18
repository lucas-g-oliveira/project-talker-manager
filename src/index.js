const express = require('express');
const allRouters = require('./routers');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

/* não remova esse endpoint, e para o avaliador funcionar */

app.use(allRouters);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = app;
