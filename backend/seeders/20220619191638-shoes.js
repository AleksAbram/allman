/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Кеды";
    const prices = [5900, 5900, 5500, 5500, 5500, 5600, 5000, 5000];
    const descriptions = [
      "Кеды коричневые без шнуровки",
      "Кеды синие без шнуровки",
      "Кеды коричневые со шнуровкой",
      "Кеды синие со шнуровкой",
      "Кеды черные со шнуровкой",
      "Кеды черные со шнуровкой и перфорацией",
      "Слипоны черные",
      "Слипоны коричневые",
    ];
    const typeId = 12;
    const item_details =
      "Коллекция: AW 2021/2022<br>Состав:  верх. натуральная кожа, подкладка - экокожа, низ. резина<br>Сезон: Весна / Лето";
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
