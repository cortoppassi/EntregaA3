module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_value: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: {
      type: DataTypes.ENUM('completed', 'canceled', 'pending'),
      defaultValue: 'completed'
    }
  });

  Sale.associate = models => {
    Sale.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Sale.belongsTo(models.Seller, { foreignKey: 'sellerId' });
    Sale.hasMany(models.SaleItem, { foreignKey: 'saleId' });
  };

  return Sale;
};
