/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const itemIds = [
      34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
      52, 53, 54, 55, 56, 57, 58, 59,
    ];
    const urls = [
      "/uploads/IMG_5594.JPG",
      "/uploads/IMG_5595.JPG",
      "/uploads/IMG_5596.JPG",
      "/uploads/IMG_5597.JPG",
      "/uploads/IMG_5598.JPG",
      "/uploads/IMG_5599.JPG",
      "/uploads/IMG_5600.JPG",
      "/uploads/IMG_5601.JPG",
      "/uploads/IMG_5602.JPG",
      "/uploads/IMG_5603.JPG",
      "/uploads/IMG_5604.JPG",
      "/uploads/IMG_5605.JPG",
      "/uploads/IMG_5606.JPG",
      "/uploads/IMG_5607.JPG",
      "/uploads/IMG_5608.JPG",
      "/uploads/IMG_5609.JPG",
      "/uploads/IMG_5610.JPG",
      "/uploads/IMG_5611.JPG",
      "/uploads/IMG_5612.JPG",
      "/uploads/IMG_5613.JPG",
      "/uploads/IMG_5614.JPG",
      "/uploads/IMG_5615.JPG",
      "/uploads/IMG_5616.JPG",
      "/uploads/IMG_5617.JPG",
      "/uploads/IMG_5618.JPG",
      "/uploads/IMG_5619.JPG",
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
