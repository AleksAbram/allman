/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Бабочки";
    const prices = [900, 900, 900, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700];
    const descriptions = [
      "Бабочка комбинированная ЧБ",
      "Бабочка комбинированная БЧ",
      "Бабочка комбинированная БЧ",
      "Бабочка черная",
      "Бабочка бордовая",
      "Бабочка персиковая",
      "Бабочка фиолетовая",
      "Бабочка коричневая",
      "Бабочка голубая",
      "Бабочка синяя",
      "Бабочка темно-синяя",
      "Бабочка темно-серая",
      "Бабочка ярко-голубая",
    ];
    const typeId = 15;
    const item_details =
      "Коллекция: AW 2021/2022<br>Состав: 50% вискоза и 50% шёлк<br>Сезон: Весна / Лето";
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
