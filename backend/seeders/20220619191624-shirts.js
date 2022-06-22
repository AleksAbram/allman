/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Рубашки и Сорочки";
    const prices = [3400, 3400, 3100, 3100];
    const descriptions = [
      'рубашка серая в белую линию',
      'рубашка белая в серую линию',
      'рубашка с коротким рукавом черная',
      'рубашка с коротким рукавом бежевая',
    ];
    const typeId = 5;
    const item_details =
      "Коллекция: AW 2021/2022Состав: 100% лён Сезон: Весна / Лето";
    const item_care = "Деликатная стирка при 30°";
    const items = prices.map((item_price, i) => ({
      item_price,
      item_name,
      item_details,
      item_care,
      typeId,
      item_description: descriptions[i],
    }));
    const itemsToSeed = items.map((item) => ({
      ...item,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));
    console.log(itemsToSeed);
    await queryInterface.bulkInsert("items", itemsToSeed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("items");
  },
};
