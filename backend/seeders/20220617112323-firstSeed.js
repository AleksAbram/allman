/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface) {
    const types = [
      [0, 'Одежда'], // 1
      [0, 'Обувь'], // 2
      [0, 'Аксессуары'], // 3
      [1, 'Пиджаки'], // 4
      [1, 'Костюмы'], // 5
      [1, 'Рубашки'], // 6
      [1, 'Тренчи'], // 7
      [1, 'Брюки'], // 8
      [2, 'Дерби'], // 9
      [2, 'Оксфорды'], // 10
      [2, 'Лоферы'], // 11
      [2, 'Кеды'], // 12
      [3, 'Ремни'], // 13
      [3, 'Галстуки'], // 14
      [3, 'Бабочки'], // 15
    ];
    const sizes = [
      [4, 0, 46, 2, 58],
      [5, 0, 46, 2, 58],
      [6, 1, 'S', 'M', 'L', 'XL', '2XL'],
      [2, 0, 39, 1, 44],
      [9, 0, 39, 1, 44],
      [10, 0, 39, 1, 44],
      [11, 0, 39, 1, 44],
      [12, 0, 39, 1, 44],
      [7, 1, 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      [8, 0, 40, 2, 52],
    ];
    const typesToSeed = types.map(([type_parent, type_name]) => ({
      type_parent,
      type_name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('types', typesToSeed);
    const sizesToSeed = [];
    sizes.forEach((size) => {
      if (size[1]) {
        for (let i = 2; i < size.length; i += 1) {
          sizesToSeed.push({
            typeId: size[0],
            size_title: size[i],
          });
        }
      } else {
        let number = size[2];
        do {
          sizesToSeed.push({
            typeId: size[0],
            size_title: `${number}`,
          });
          number += size[3];
        } while (number <= size[4]);
      }
    });
    await queryInterface.bulkInsert('sizes', sizesToSeed.map((size) => ({
      ...size,
      updatedAt: new Date(),
      createdAt: new Date(),
    })));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sizes');
    await queryInterface.bulkDelete('types');
  },
};
