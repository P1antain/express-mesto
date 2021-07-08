const errorHandler = (err, req, res) => res.status(err.statusCode || 500).send({
  message: `Ошибка: ${err.message || 'Ошибка на сервере'}`,
});

module.exports = errorHandler;
