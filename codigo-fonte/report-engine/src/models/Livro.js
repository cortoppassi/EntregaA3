module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define('Livro', {
        titulo: { type: DataTypes.STRING, allowNull: false },
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        estoque: { type: DataTypes.INTEGER, allowNull: false }
    });

    Livro.associate = models => {
        Livro.hasMany(models.ItemVenda, { foreignKey: 'livroId' });
    };

    return Livro;
};