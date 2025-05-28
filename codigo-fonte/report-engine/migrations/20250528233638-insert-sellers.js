'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sellers', [
      {
        name: 'Fernanda Ribeiro',
        email: 'fernanda.ribeiro@example.com',
        phone: '11988880001',
        cpf: '12345678900',
        registration_number: 'REG001',
        hire_date: '2023-03-15',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucas Almeida',
        email: 'lucas.almeida@example.com',
        phone: '11988880002',
        cpf: '98765432100',
        registration_number: 'REG002',
        hire_date: '2022-11-20',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sellers', {
      email: [
        'fernanda.ribeiro@example.com',
        'lucas.almeida@example.com'
      ]
    }, {});
  }
};
