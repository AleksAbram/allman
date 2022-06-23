/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const item_name = 'Тренч';
    const prices = [12000, 12000, 12000, 12000];
    const descriptions = [
      'Тренч чёрный с поясом',
      'Тренч синий с поясом',
      'Тренч бежевый с поясом',
      'Тренч цвета хаки с поясом',
    ];
    const typeId = 7;
    const item_details =
      'Коллекция: AW 2021/2022Состав: 70%-хлопок; 28%-вискоза; 2%-эластан Сезон: Весна / Лето';
    const item_care = 'Химчистка, паровая чистка';
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
