'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sales = [];

    for (let i = 1; i <= 25; i++) {
      sales.push({
        sale_date: new Date(2025, 0, i),
        total_value: parseFloat((Math.random() * 1000 + 50).toFixed(2)),
        status: ['completed', 'canceled', 'pending'][Math.floor(Math.random() * 3)],
        customerId: (i % 5) + 1,
        sellerId: (i % 2) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Sales', sales, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
