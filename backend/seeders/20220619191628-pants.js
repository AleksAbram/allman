/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "брюки";
    const prices = [3500, 3700, 3500];
    const descriptions = [
      "брюки белые casual",
      "брюки черные casual",
      "брюки бежевые casual",
    ];
    const typeId = 8;
    const item_details =
      "Коллекция: AW 2021/2022<br>Состав:  состав: 98% хлопок, 2% эластан<br>Сезон: Весна / Лето";
    const item_care = "Уход: Деликатная стирка при 30°";
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
