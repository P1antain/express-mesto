const jwt = require('jsonwebtoken');
const NotFoundUserError = require('../errors/NotFoundError');

// eslint-disable-next-line consistent-return
module.exports.auth = (req, res, next) => {
  const { authorization } = req.cookies.jwt;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Необходимо авторизоваться' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'secret-key');
  } catch (err) {
    return next(new NotFoundUserError('Неверный токен'));
  }
  req.user = payload;

  next();
};
