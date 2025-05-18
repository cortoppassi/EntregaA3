module.exports = (sequelize, DataTypes) => {
    const Vendedor = sequelize.define('Vendedor', {
        nome: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        telefone: DataTypes.STRING,
        cpf: { type: DataTypes.STRING, unique: true },
        matricula: { type: DataTypes.STRING, unique: true },
        data_contratacao: DataTypes.DATEONLY,
        ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
    });

    Vendedor.associate = models => {
        Vendedor.hasMany(models.Venda, { foreignKey: 'vendedorId' });
    };

    return Vendedor;
};