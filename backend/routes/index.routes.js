const Router = require('express');

const router = new Router();
const deviceRouter = require('./deviceRouter.routes');
const userRouter = require('./userRouter.routes');
const brandRouter = require('./brandRouter.routes');
const typeRouter = require('./typeRouter.routes');
// const checkRole = require('../middleware/checkRoleMiddleware');
const itemRouter = require('./itemRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/items', itemRouter);

module.exports = router;
