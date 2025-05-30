const { sequelize } = require('../models');

class SaleRepository {
  async createSale(saleData, saleItems) {
    const t = await sequelize.transaction();

    try {
      // Cria a venda
      const [result] = await sequelize.query(
        `INSERT INTO Sales (customerId, sellerId, sale_date, total_value, status)
         VALUES (?, ?, NOW(), ?, 'completed');`,
        {
          replacements: [
            saleData.customerId,
            saleData.sellerId,
            saleData.total_value,
          ],
          transaction: t,
        }
      );

      const saleId = result.insertId; // Pega o ID da venda recém-criada

      for (const item of saleItems) {
        // Cria SaleItem
        await sequelize.query(
          `INSERT INTO SaleItems (saleId, productId, quantity, unit_price)
           VALUES (?, ?, ?, ?);`,
          {
            replacements: [
              saleId,
              item.productId,
              item.quantity,
              item.unit_price,
            ],
            transaction: t,
          }
        );

        // Verifica estoque
        const [productResult] = await sequelize.query(
          `SELECT stock, title FROM Products WHERE id = ? FOR UPDATE;`,
          {
            replacements: [item.productId],
            transaction: t,
          }
        );

        const product = productResult[0];

        if (!product) {
          throw new Error('Product not found');
        }

        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product: ${product.title}`);
        }

        // Atualiza estoque
        await sequelize.query(
          `UPDATE Products SET stock = stock - ? WHERE id = ?;`,
          {
            replacements: [item.quantity, item.productId],
            transaction: t,
          }
        );
      }

      await t.commit();
      return { id: saleId, ...saleData, status: 'completed' };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  async cancelSale(saleId) {
    const t = await sequelize.transaction();

    try {
      // Verifica se a venda existe
      const [saleResult] = await sequelize.query(
        `SELECT * FROM Sales WHERE id = ? FOR UPDATE;`,
        {
          replacements: [saleId],
          transaction: t,
        }
      );

      const sale = saleResult[0];

      if (!sale) {
        throw new Error('Sale not found');
      }

      if (sale.status === 'canceled') {
        throw new Error('Sale already canceled');
      }

      // Atualiza status da venda
      await sequelize.query(
        `UPDATE Sales SET status = 'canceled' WHERE id = ?;`,
        {
          replacements: [saleId],
          transaction: t,
        }
      );

      // Recupera os itens da venda
      const [itemsResult] = await sequelize.query(
        `SELECT * FROM SaleItems WHERE saleId = ?;`,
        {
          replacements: [saleId],
          transaction: t,
        }
      );

      // Devolve estoque dos produtos
      for (const item of itemsResult) {
        await sequelize.query(
          `UPDATE Products SET stock = stock + ? WHERE id = ?;`,
          {
            replacements: [item.quantity, item.productId],
            transaction: t,
          }
        );
      }

      await t.commit();
      return { ...sale, status: 'canceled' };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
}

module.exports = new SaleRepository();
