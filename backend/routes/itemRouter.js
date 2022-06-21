const itemRouter = require('express').Router();
const itemController = require('../controllers/itemController');

itemRouter.post('/', itemController.create);
itemRouter.get('/type/:typeId', itemController.getAll);
itemRouter.get('/types', itemController.getTypes);
itemRouter.get('/sizes', itemController.getSizes);

itemRouter.get('/', itemController.getAll);
itemRouter.get('/:id', itemController.getOne);

module.exports = itemRouter;
