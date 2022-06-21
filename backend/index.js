require("dotenv").config();
const config = require('./configjs/configjs');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index.routes');
// const errorHandler = require('./middleware/ErrorHandingMiddleware');


// const errorHandler = require("./middleware/ErrorHandingMiddleware");
// const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;


config(app);


// app.use(cors({ origin: 'http://localhost:3001', credentials: true })); ///'http://localhost:3000'
// app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок. Должен идти последним!
// app.use(errorHandler);

const start = async () => {
  console.log(process.env.DATABASE_URL);
  try {
    app.listen(PORT, () =>
      console.log(`>>>>>> Server started in ${PORT}PORT <<<<<<`)
    );
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }
};

start();
