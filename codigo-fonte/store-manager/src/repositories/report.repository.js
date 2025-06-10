const { Product, Order, OrderItem, Customer } = require('../models');
const { Sequelize, Op } = require('sequelize');

module.exports = {
  async findBestSellingProducts() {
    const [results] = await sequelize.query(`
    SELECT 
      si.productId,
      p.title AS name,
      p.price,
      SUM(si.quantity) AS totalSold
    FROM "SaleItems" si
    JOIN "Products" p ON p.id = si.productId
    GROUP BY si.productId, p.title, p.price
    ORDER BY totalSold DESC
    LIMIT 10;
  `);
    return results;
  },

  async findProductsByCustomer(customerId) {
    const [results] = await sequelize.query(`
    SELECT 
      si.productId,
      p.title AS name,
      si.quantity,
      si.unit_price AS price
    FROM "Sales" s
    JOIN "SaleItems" si ON si.saleId = s.id
    JOIN "Products" p ON p.id = si.productId
    WHERE s.customerId = :customerId;
  `, {
      replacements: { customerId }
    });
    return results
  },

  async findAverageConsumptionPerCustomer() {
    const [results] = await sequelize.query(`
    SELECT 
      c.id AS customerId,
      c.name,
      c.email,
      AVG(s.total_value) AS averageSpent
    FROM "Customers" c
    JOIN "Sales" s ON s.customerId = c.id
    GROUP BY c.id, c.name, c.email;
  `);
    return results;
  },

  async findLowStockProducts() {
    const [results] = await sequelize.query(`
    SELECT 
      id,
      title AS name,
      stock
    FROM "Products"
    WHERE stock < 10;
  `);
    return results;
  }
};
