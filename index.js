const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use('/api/convocatorias-ms', routes);

app.listen(PORT, () => {
  console.log('Escuchando puerto:', PORT);
});

app.use(ErrorHandlerMiddleware.MainHandler);

module.exports = app;
