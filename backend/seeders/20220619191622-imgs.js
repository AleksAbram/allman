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
      '/img/IMG_5533.JPG',
      '/img/IMG_5534.JPG',
      '/img/IMG_5535.JPG',
      '/img/IMG_5536.JPG',
      '/img/IMG_5537.JPG',
      '/img/IMG_5538.JPG',
      '/img/IMG_5539.JPG',
      '/img/IMG_5540.JPG',
    ];
    const imgs = itemIds.map((itemId, i) => ({
      item_image_url: urls[i],
      itemId,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));

    console.log(imgs);
    await queryInterface.bulkInsert('item_images', imgs);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('item_images');
  },
};
