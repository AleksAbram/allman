/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const itemIds = [
      65, 66, 67, 68, 69, 70, 71, 72,
    ];
    const urls = [
      "/uploads/IMG_5620.JPG",
      "/uploads/IMG_5621.JPG",
      "/uploads/IMG_5622.JPG",
      "/uploads/IMG_5623.JPG",
      "/uploads/IMG_5624.JPG",
      "/uploads/IMG_5625.JPG",
      "/uploads/IMG_5626.JPG",
      "/uploads/IMG_5627.JPG",
    ];
    const imgs = itemIds.map((itemId, i) => ({
      item_image_url: urls[i],
      itemId,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));

    console.log(imgs);
    await queryInterface.bulkInsert("item_images", imgs);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("item_images");
  },
};
