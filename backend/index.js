require('dotenv').config()
const express = require('express')
const sequelize = require('./db');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.routes');
const errorHandler = require('./middleware/ErrorHandingMiddleware');
const path = require('path');
// const cors = require('cors');
const PORT = process.env.PORT || 3000

const app = express();
// app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок. Должен идти последним!
app.use(errorHandler)


const start = async () => {
  try {
    app.listen(PORT, () => console.log(`>>>>>> Server started in ${PORT}PORT <<<<<<`))
    await sequelize.authenticate()
    await sequelize.sync()
  } catch (e) {
    console.log(e);
  }
}

start()

