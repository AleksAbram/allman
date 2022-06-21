require('dotenv').config();
const express = require('express');
// const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index.routes');
// const errorHandler = require('./middleware/ErrorHandingMiddleware');

const PORT = process.env.PORT || 3000;
const publicPath = path.resolve('public');
const app = express();
app.use(express.static(publicPath));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

// Обработка ошибок. Должен идти последним!
// app.use(errorHandler);

const start = async () => {
  console.log(process.env.DATABASE_URL);
  try {
    app.listen(PORT, () => console.log(`>>>>>> Server started in ${PORT}PORT <<<<<<`));
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }
};

start();
