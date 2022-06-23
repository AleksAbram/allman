const bcrypt = require("bcrypt");
const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");

// const generateJWT = (id, email, role, name) =>
//   jwt.sign({ id, email, role, name }, process.env.SESSION_SECRET, {
//     expiresIn: "24h",
//   });
class UserController {
  async registration(req, res, next) {
    const { user_email, user_password, user_name } = req.body;
    // console.log(req.body);
    if (!user_email || !user_password) {
      return next(ApiError.badRequest("Некорректный email или password!"));
    }
    const candidate = await User.findOne({ where: { user_email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует!")
      );
    }
    const hashPassword = await bcrypt.hash(user_password, 5);
    const newUser = await User.create({
      user_email,
      user_password: hashPassword,
      user_name,
    });
    req.session.user = newUser;
    // const basket = await Basket.create({ userId: user.id });
    res.status(201).json({ user: newUser.user_role });
  }

  async login(req, res, next) {
    const { user_email, user_password } = req.body;
    // console.log('=======>req', req.body);
    const user = await User.findOne({ where: { user_email } });
    // console.log('=======>user', user);
    if (!user) {
      // return next(ApiError.internal("Пользователь не найден"));
      // res.json({ message: "Пользователь не найден" });
      // console.log('===========>', ApiError.internal("Пользователь не найден"));
      return next(ApiError.internal("Пользователь не найден"));
    }
    const comparePassword = await bcrypt.compare(
      user_password,
      user.user_password,
    );
    if (!comparePassword) {
      return next(ApiError.internal("Неверный пароль"));
    }
    if (user && (await bcrypt.compare(user_password, user.user_password))) {
      req.session.user = user;
      res.status(201).json({ user: user.user_role });
    }
  }

  async logout(req, res, next) {
    req.session.destroy();
    res.clearCookie("sid");
    res.json({ user: "" });
  }

  async check(req, res, next) {
    // console.log(req.session.user);
    if (req.session.user) {
      res.json({ user: req.session.user.user_role });
    } else {
      res.json({ user: "" });
    }
  }
}

module.exports = new UserController();
