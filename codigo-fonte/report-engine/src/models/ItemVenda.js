module.exports = (sequelize, DataTypes) => {
    const ItemVenda = sequelize.define('ItemVenda', {
        quantidade: { type: DataTypes.INTEGER, allowNull: false },
        preco_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
    });

    ItemVenda.associate = models => {
        ItemVenda.belongsTo(models.Venda, { foreignKey: 'vendaId' });
        ItemVenda.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    };

    return ItemVenda;
};