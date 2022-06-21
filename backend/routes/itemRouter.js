const multer = require('multer');
const path = require('path');

const itemRouter = require('express').Router();
const itemController = require('../controllers/itemController');
const { Item, ItemImage } = require('../models/models');

itemRouter.post('/', itemController.create);
itemRouter.get('/type/:typeId', itemController.getAll);
itemRouter.get('/types', itemController.getTypes);
itemRouter.get('/sizes', itemController.getSizes);

itemRouter.get('/', itemController.getAll);
itemRouter.get('/:id', itemController.getOne);

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

itemRouter.post('/:id', upload.array('item_images'), async (req, res, next) => {
  // const photo = `/${req.file.path.split('/').slice(1).join('/')}`;

  try {
    await Item.update(
      req.body,
      { where: { id: req.params.id } },
    );
    if (req.files) {
      const photos = req.files.map((file) => (
        {
          item_image_url: `/${file.path.split('/').slice(1).join('/')}`,
          itemId: req.params.id,
        }));
      await ItemImage.bulkCreate(photos);
    }
  } catch (error) {
    console.log(error);
  }
  /// console.log(photo);
  res.json({ ok: 'OK' });
});

module.exports = itemRouter;
