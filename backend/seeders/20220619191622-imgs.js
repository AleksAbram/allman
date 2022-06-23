/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const itemIds = [
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
    ];
    const urls = [
      '/uploads/IMG_5533.JPG',
      '/uploads/IMG_5534.JPG',
      '/uploads/IMG_5535.JPG',
      '/uploads/IMG_5536.JPG',
      '/uploads/IMG_5537.JPG',
      '/uploads/IMG_5538.JPG',
      '/uploads/IMG_5539.JPG',
      '/uploads/IMG_5540.JPG',
    ];
    const imgs = itemIds.map((itemId, i) => ({
      item_image_url: urls[i],
      itemId,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));

    await queryInterface.bulkInsert('item_images', imgs);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('item_images');
  },
};
