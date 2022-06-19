const itemRouter = require('express').Router();
const itemController = require('../controllers/itemController');

itemRouter.post('/', itemController.create);
itemRouter.get('/', itemController.getAll);
itemRouter.get('/:id', itemController.getOne);

module.exports = itemRouter;
