// require('dotenv').config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const path = require("path");
const { cookiesCleaner, local } = require("../middleware/authMiddleware");

// const FileStore = sessionFileStore(session);

// const config = (app) => {
//   // Use
//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json());
//   app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//   app.use(cookieParser());
//   app.use(session({
//     key: 'user_sid',
//     secret: `${process.env.SECRET_WORD}`,
//     store: new FileStore(),
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 100000 * 60 * 60 * 12,
//       httpOnly: true,
//     },
//   }));
// };

const sessionConfig = {
  store: new FileStore(),
  name: "sid", // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? "azsxdcfv", // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.static(path.resolve(__dirname, "static")));
//   app.use("/images", express.static(path.join(__dirname, "images")));
  app.use(cookieParser());
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(session(sessionConfig));
  app.use(cookiesCleaner);
  app.use(local);
};

module.exports = config;
