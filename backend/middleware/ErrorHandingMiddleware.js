const ApiError = require('../error/ApiError');

module.exports = function (err, req, res) { // (ошибка,запрос, ответ, функция next);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
