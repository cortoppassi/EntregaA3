const { Sale, SaleItem, Product } = require('../models');

class SaleRepository {
    async createSale(saleData, saleItems) {
        return await Sale.sequelize.transaction(async (t) => {
            const sale = await Sale.create(saleData, { transaction: t });

            for (const item of saleItems) {
                await SaleItem.create(
                    {
                        saleId: sale.id,
                        productId: item.productId,
                        quantity: item.quantity,
                        unit_price: item.unit_price,
                    },
                    { transaction: t }
                );

                const product = await Product.findByPk(item.productId, { transaction: t });
                if (!product) throw new Error('Product not found');

                if (product.stock < item.quantity) {
                    throw new Error(`Insufficient stock for product: ${product.title}`);
                }

                product.stock -= item.quantity;
                await product.save({ transaction: t });
            }

            return sale;
        });
    }

    async cancelSale(saleId) {
        return await Sale.sequelize.transaction(async (t) => {
            const sale = await Sale.findByPk(saleId, { include: SaleItem, transaction: t });

            if (!sale) throw new Error('Sale not found');
            if (sale.status === 'canceled') throw new Error('Sale already canceled');

            sale.status = 'canceled';
            await sale.save({ transaction: t });

            for (const item of sale.SaleItems) {
                const product = await Product.findByPk(item.productId, { transaction: t });
                if (product) {
                    product.stock += item.quantity;
                    await product.save({ transaction: t });
                }
            }

            return sale;
        });
    }
}

module.exports = new SaleRepository();