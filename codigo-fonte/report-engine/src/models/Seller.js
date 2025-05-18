module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('Seller', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.STRING,
    cpf: { type: DataTypes.STRING, unique: true },
    registration_number: { type: DataTypes.STRING, unique: true },
    hire_date: DataTypes.DATEONLY,
    active: { type: DataTypes.BOOLEAN, defaultValue: true }
  });

  Seller.associate = models => {
    Seller.hasMany(models.Sale, { foreignKey: 'sellerId' });
  };

  return Seller;
};
