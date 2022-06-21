/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = 'Костюм';
    const prices = [
      20000,
      20000,
      22000,
      19000,
    ];
    const descriptions = [
      'Костюм тройка бордовый в синюю клетку',
      'Костюм тройка зеленый в серую клетку',
      'Костюм тройка бтемно-синий',
      'Костюм двубортный серый в светлую клетку',
    ];
    const typeId = 5;
    const item_details = 'Коллекция: AW 2021/2022Состав: 80% шерсть, 20% вискозаСезон: Весна / Лето';
    const item_care = 'Только химчистка';
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
    await queryInterface.bulkInsert('items', itemsToSeed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('items');
  },
};
