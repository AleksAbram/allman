/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
const uuid = require('uuid');
const path = require('path'); // Встроенный модуль path, который есть в NODE
const { Op } = require('sequelize');
const { Item, ItemImage, Type } = require('../models/models');
const ApiError = require('../error/ApiError');

function getChildrenTypes(types, parentId) {
  let children = types.filter((type) => type.type_parent === parentId);
  if (children.length > 0) {
    for (let i = 0; i < children.length; i += 1) {
      children = [...children, ...getChildrenTypes(types, children[i].id)];
    }
    return children;
  }
  return [];
}

class ItemController {
  async create(req, res, next) {
    try {
      const {
        item_name, item_price, item_details, typeId, item_description,
      } = req.body;
      const { img } = req.files;
      const fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const item = await Item.create({
        item_name, item_price, item_details, typeId, item_description,
      });
      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    const { typeId } = req.params;
    let {
      limit, page,
    } = req.query;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    let items;
    try {
      if (!typeId) {
        items = await Item.findAndCountAll({
          limit,
          offset,
          include: [{ model: ItemImage, as: 'item_images' }],
        });
      } else {
        const allTypes = await Type.findAll();
        const types = [typeId, ...getChildrenTypes(allTypes, Number(typeId)).map((t) => t.id)];
        items = await Item.findAndCountAll({
          where: {
            typeId: {
              [Op.in]: types,
            },
          },
          limit,
          offset,
          include: [{ model: ItemImage, as: 'item_images' }],
        });
      }
      return res.json(items);
    } catch (error) {
      console.log(error.message);
      // next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findOne(
        {
          where: { id },
        },
      );
      return res.json(item);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ItemController();
