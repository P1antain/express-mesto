const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routerCards = require('./routes/cards');
const routerUser = require('./routes/users');

const { login, createUser } = require('./controllers/users');

const { auth } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { validateAuth } = require('./middlewares/celebrate');

const page404 = require('./routes/page404');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cookieParser());
app.use(errors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signin', validateAuth, login);
app.post('/signup', validateAuth, createUser);

app.use(helmet());

app.use(auth);

app.use('/', routerUser);

app.use('/', routerCards);

app.use('/', page404);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {});
