/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Монки";
    const prices = [7000];
    const descriptions = [
      "монки черные с одной пряжкой",
    ];
    const typeId = 11;
    const item_details =
      "Коллекция: AW 2021/2022Состав:  верх. натуральная кожа, подкладка - экокожа, низ. резинаСезон: Весна / Лето";
    const item_care = "Только сухая чистка и обработка питательными кремами";
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
