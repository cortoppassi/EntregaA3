const { Product } = require('../models')

exports.createProduct = async (body) => {
  const { title, author, publisher, price, stock } = body;

  try {
    const product = await Product.create({ title, author, publisher, price, stock });
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getProductById = async (id) => {
  try {
    const product = await Product.findOne({
      where: {
        id
      }
    });

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.updateProduct = async (id, updateData) => {
  try {
    await Product.update(updateData, { where: { id } });

    const updatedProduct = await Product.findOne({
      where: {
        id
      }
    });

    return updatedProduct;
  } catch (error) {
    console.error('Erro ao atualizar produto no repositório:', error);
    throw error;
  }
};

exports.deleteProduct = async (id) => {
  try {
    await Product.destroy({
      where: {
        id
      }
    });
  } catch (error) {
    console.error('Erro ao deletar no repositório:', error);
    throw error;
  }
};