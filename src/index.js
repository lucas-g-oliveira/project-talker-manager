const express = require('express');
const getMethods = require('./routers/getMethods.route');
const postMethods = require('./routers/postMethods.route');
const putMethods = require('./routers/putMethods.route');
const deleteMethods = require('./routers/deleteMethods.route');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(getMethods);
app.use(postMethods);
app.use(putMethods);
app.use(deleteMethods);

/* não remova esse endpoint, e para o avaliador funcionar */

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = app;
