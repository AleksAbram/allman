const Router = require('express');

const router = new Router();
const deviceRouter = require('./deviceRouter.routes');
const userRouter = require('./userRouter.routes');
const brandRouter = require('./brandRouter.routes');
const typeRouter = require('./typeRouter.routes');
const checkRole = require('../middleware/checkRoleMiddleware');

router.use('/user', checkRole('ADMIN'), userRouter);
router.use('/type', checkRole('ADMIN'), typeRouter);
router.use('/brand', checkRole('ADMIN'), brandRouter);
router.use('/device', checkRole('ADMIN'), deviceRouter);

module.exports = router;
