'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Alice Gomes Nascimento',
        email: 'alice@example.com',
        phone: '11999990001',
        cpf: '11111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinaldo Ribeiro de Carvalho',
        email: 'dinaldo@example.com',
        phone: '11999990002',
        cpf: '22222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonathan Cortoppassi',
        email: 'jonathan@example.com',
        phone: '11999990003',
        cpf: '33333333333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samuel Pereira de Souza',
        email: 'samuel@example.com',
        phone: '11999990004',
        cpf: '44444444444',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eduarda Lima',
        email: 'eduarda@example.com',
        phone: '11999990005',
        cpf: '55555555555',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', {
      email: [
        'alice@example.com',
        'dinaldo@example.com',
        'jonathan@example.com',
        'samuel@example.com',
        'eduarda@example.com'
      ]
    }, {});
  }
};
