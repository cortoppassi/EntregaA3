module.exports = (sequelize, DataTypes) => {
  const SaleItem = sequelize.define('SaleItem', {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    unit_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  });

  SaleItem.associate = models => {
    SaleItem.belongsTo(models.Sale, { foreignKey: 'saleId' });
    SaleItem.belongsTo(models.Product, { foreignKey: 'productId' });
  };

  return SaleItem;
};
