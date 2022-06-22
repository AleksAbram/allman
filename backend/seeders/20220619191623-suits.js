/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = "Костюм";
    const prices = [19000, 23000, 22000, 25000, 24000, 23000, 23000, 24000, 24000, 24000];
    const descriptions = [
      "костюм двубортный коричневый в клетку",
      "костюм тройка фактурный темно-синий",
      "костюм тройка бежевый с пиджаком в клетку",
      "костюм тройка смокинг черный с круглыми лацканами",
      'костюм тройка терракотовый',
      'костюм тройка коричневый в синюю клетку',
      'костюм тройка серый',
      'костюм тройка изумрудный',
      'костюм тройка коричневый',
      'костюм тройка бежевый',
    ];
    const typeId = 5;
    const item_details =
      "Коллекция: AW 2021/2022Состав: 80% шерсть, 20% вискозаСезон: Весна / Лето";
    const item_care = "Только химчистка";
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
