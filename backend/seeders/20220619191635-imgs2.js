/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const itemIds = [
      5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 60,
      60, 61, 61, 62, 62, 63, 63, 64, 64, 15, 16, 17, 18, 19, 19, 20, 20, 21,
      21, 22, 22, 23, 24, 28, 29, 30, 25, 26, 27, 31, 32, 33,
    ];
    const urls = [
      "/uploads/IMG_5541.JPG",
      "/uploads/IMG_5542.JPG",
      "/uploads/IMG_5543.JPG",
      "/uploads/IMG_5544.JPG",
      "/uploads/IMG_5545.JPG",
      "/uploads/IMG_5546.JPG",
      "/uploads/IMG_5547.JPG",
      "/uploads/IMG_5548.JPG",
      "/uploads/IMG_5549.JPG",
      "/uploads/IMG_5550.JPG",
      "/uploads/IMG_5551.JPG",
      "/uploads/IMG_5552.JPG",
      "/uploads/IMG_5553.JPG",
      "/uploads/IMG_5554.JPG",
      "/uploads/IMG_5555.JPG",
      "/uploads/IMG_5556.JPG",
      "/uploads/IMG_5557.JPG",
      "/uploads/IMG_5558.JPG",
      "/uploads/IMG_5559.JPG",
      "/uploads/IMG_5560.JPG",
      "/uploads/IMG_5561.JPG",
      "/uploads/IMG_5562.JPG",
      "/uploads/IMG_5563.JPG",
      "/uploads/IMG_5564.JPG",
      "/uploads/IMG_5565.JPG",
      "/uploads/IMG_5566.JPG",
      "/uploads/IMG_5567.JPG",
      "/uploads/IMG_5568.JPG",
      "/uploads/IMG_5569.JPG",
      "/uploads/IMG_5570.JPG",
      "/uploads/IMG_5571.JPG",
      "/uploads/IMG_5572.JPG",
      "/uploads/IMG_5573.JPG",
      "/uploads/IMG_5574.JPG",
      "/uploads/IMG_5575.JPG",
      "/uploads/IMG_5576.JPG",
      "/uploads/IMG_5577.JPG",
      "/uploads/IMG_5578.JPG",
      "/uploads/IMG_5579.JPG",
      "/uploads/IMG_5580.JPG",
      "/uploads/IMG_5581.JPG",
      "/uploads/IMG_5582.JPG",
      "/uploads/IMG_5583.JPG",
      "/uploads/IMG_5584.JPG",
      "/uploads/IMG_5585.JPG",
      "/uploads/IMG_5586.JPG",
      "/uploads/IMG_5587.JPG",
      "/uploads/IMG_5588.JPG",
      "/uploads/IMG_5589.JPG",
      "/uploads/IMG_5590.JPG",
      "/uploads/IMG_5591.JPG",
      "/uploads/IMG_5592.JPG",
      "/uploads/IMG_5593.JPG",
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
