const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routerCards = require('./routes/cards');
const routerUser = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '60dad7d5882f1b141827047c',
  };

  next();
});

app.use('/', routerUser);
app.use('/', routerCards);
app.use(helmet());

app.get(/.*/, (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.post(/.*/, (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
