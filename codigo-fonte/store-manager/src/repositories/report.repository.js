const { Product, Order, OrderItem, Customer } = require('../models');
const { Sequelize, Op } = require('sequelize');

module.exports = {
  async findBestSellingProducts() {
    return await OrderItem.findAll({
      attributes: [
        'productId',
        [Sequelize.fn('SUM', Sequelize.col('quantity')), 'totalSold']
      ],
      include: {
        model: Product,
        attributes: ['name', 'price']
      },
      group: ['productId', 'Product.id'],
      order: [[Sequelize.literal('totalSold'), 'DESC']],
      limit: 10
    });
  },

  async findProductsByCustomer(customerId) {
    const orders = await Order.findAll({
      where: { customerId },
      include: {
        model: OrderItem,
        include: {
          model: Product,
          attributes: ['name', 'price']
        }
      }
    });

    return orders.flatMap(order =>
      order.OrderItems.map(item => ({
        productId: item.productId,
        name: item.Product.name,
        quantity: item.quantity,
        price: item.Product.price
      }))
    );
  },

  async findAverageConsumptionPerCustomer() {
    return await Order.findAll({
      attributes: [
        'customerId',
        [Sequelize.fn('AVG', Sequelize.col('total')), 'averageSpent']
      ],
      group: ['customerId'],
      include: {
        model: Customer,
        attributes: ['name', 'email']
      }
    });
  },

  async findLowStockProducts() {
    return await Product.findAll({
      where: {
        stock: { [Op.lt]: 10 }
      },
      attributes: ['id', 'name', 'stock']
    });
  }
};
