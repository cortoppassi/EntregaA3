module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.STRING,
    cpf: { type: DataTypes.STRING, unique: true }
  });

  Customer.associate = models => {
    Customer.hasMany(models.Sale, { foreignKey: 'customerId' });
  };

  return Customer;
};
