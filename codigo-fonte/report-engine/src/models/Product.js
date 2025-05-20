module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false }
  });

  Product.associate = models => {
    Product.hasMany(models.SaleItem, { foreignKey: 'productId' });
  };

  return Product;
};

