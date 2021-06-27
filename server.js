'use strict';

const express = require('express');

const app = express();

const notFoundHandler = require('./error-handlers/error404');
const errorHandler = require('./error-handlers/error500');

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res) => {
  throw new Error('Something went wrong');
});

app.use('*', notFoundHandler); // this middlewhere shoud be after all the routes 
app.use(errorHandler); // this line of code should be at the last line (before the exports)

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server is working on ${port}`);
  });
};

module.exports = {
  app,
  start,
};
