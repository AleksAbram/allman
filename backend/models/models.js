const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_email: { type: DataTypes.STRING, unique: true },
  user_password: { type: DataTypes.STRING },
  user_role: { type: DataTypes.STRING, defaultValue: 'User' },
  user_name: { type: DataTypes.STRING },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Item = sequelize.define('item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  item_name: { type: DataTypes.STRING, allowNull: false },
  item_price: { type: DataTypes.INTEGER, allowNull: false },
  item_details: { type: DataTypes.STRING },
  item_description: { type: DataTypes.STRING },
  item_care: { type: DataTypes.STRING },
});
const ItemImage = sequelize.define('item_image', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  item_image_url: { type: DataTypes.STRING, allowNull: false },
});
const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type_name: { type: DataTypes.STRING, unique: true, allowNull: false },
  type_parent: { type: DataTypes.INTEGER },
});

const AtelierService = sequelize.define('atelier_service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  atelier_service_title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});
const AtelierAppointment = sequelize.define('AtelierAppointment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  atelier_name: { type: DataTypes.STRING },
  atelier_phone: { type: DataTypes.STRING },
  atelier_email: { type: DataTypes.STRING },
  atelier_price: { type: DataTypes.STRING },
});

const Size = sequelize.define('size', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  size_title: { type: DataTypes.STRING, allowNull: false },
});

const ItemSize = sequelize.define('item_size', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  item_size_quantity: { type: DataTypes.INTEGER },
});

User.hasMany(Basket);
Basket.belongsTo(User);

Item.hasMany(Basket);
Basket.belongsTo(Item);

AtelierService.hasMany(AtelierAppointment);
AtelierAppointment.belongsTo(AtelierService);

Type.hasMany(Item);
Item.belongsTo(Type);

Type.hasMany(Size);
Size.belongsTo(Type);

Item.belongsToMany(Size, { through: ItemSize });
Size.belongsToMany(Item, { through: ItemSize });

Item.hasMany(ItemImage);
ItemImage.belongsTo(Item);

module.exports = {
  User,
  Basket,
  Item,
  Type,
  AtelierService,
  Size,
  AtelierAppointment,
  ItemSize,
  ItemImage,
};
