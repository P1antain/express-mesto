const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

router.all('*', (req, res, next) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  next(new NotFoundError('Warning!'));
});

module.exports = router;
