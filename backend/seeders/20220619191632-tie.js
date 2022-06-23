/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Галстуки";
    const prices = [1000, 1000, 1000, 1000, 1300, 1300, 1300, 1000];
    const descriptions = [
      "Галстук однотонный бордовый",
      "Галстук однотонный голубой",
      "Галстук однотонный серый",
      "Галстук однотонный темно-синий",
      "Галстук с принтом диагональ",
      "Галстук с принтом синий",
      "Галстук с принтом бордовый",
      "Галстук однотонный черный",
    ];
    const typeId = 14;
    const item_details =
      "Коллекция: AW 2021/2022Состав: 50% вискоза и 50% шёлк Сезон: Весна / Лето";
    const item_care = "ТДеликатная стирка при 30°";
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
