const { sequelize } = require('../models');

exports.createProduct = async (body) => {
  const { title, author, publisher, price, stock } = body;

  try {
    const createdAt = new Date();
    const updatedAt = new Date();

    const [result] = await sequelize.query(
      `INSERT INTO loja.Products (title, author, publisher, price, stock, createdAt, updatedAt)
   VALUES (:title, :author, :publisher, :price, :stock, :createdAt, :updatedAt);`,
      {
        replacements: { title, author, publisher, price, stock, createdAt, updatedAt },
        type: sequelize.QueryTypes.INSERT,
      }
    );

    const insertedId = result;

    const [products] = await sequelize.query(
      `SELECT * FROM Products WHERE id = :id`,
      {
        replacements: { id: insertedId },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await sequelize.query(
      `SELECT * FROM Products;`,
      { type: sequelize.QueryTypes.SELECT }
    );
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getProductById = async (id) => {
  try {
    const [product] = await sequelize.query(
      `SELECT * FROM Products WHERE id = :id LIMIT 1;`,
      {
        replacements: { id },
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return product || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updateProduct = async (id, updateData) => {
  try {
    const fields = [];
    const replacements = { id };

    if (updateData.title !== undefined) {
      fields.push(`title = :title`);
      replacements.title = updateData.title;
    }
    if (updateData.author !== undefined) {
      fields.push(`author = :author`);
      replacements.author = updateData.author;
    }
    if (updateData.publisher !== undefined) {
      fields.push(`publisher = :publisher`);
      replacements.publisher = updateData.publisher;
    }
    if (updateData.price !== undefined) {
      fields.push(`price = :price`);
      replacements.price = updateData.price;
    }
    if (updateData.stock !== undefined) {
      fields.push(`stock = :stock`);
      replacements.stock = updateData.stock;
    }

    if (fields.length === 0) return await exports.getProductById(id);

    await sequelize.query(
      `UPDATE Products SET ${fields.join(', ')} WHERE id = :id;`,
      {
        replacements,
        type: sequelize.QueryTypes.RAW, // RAW é o correto aqui
      }
    );

    return await exports.getProductById(id);
  } catch (error) {
    console.error('Erro ao atualizar produto no repositório:', error);
    throw error;
  }
};

exports.deleteProduct = async (id) => {
  try {
    await sequelize.query(
      `DELETE FROM Products WHERE id = :id;`,
      {
        replacements: { id },
        type: sequelize.QueryTypes.RAW,  // RAW para DELETE
      }
    );
  } catch (error) {
    console.error('Erro ao deletar no repositório:', error);
    throw error;
  }
};
