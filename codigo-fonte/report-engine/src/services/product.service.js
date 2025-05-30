const ProductRepository = require('../repositories/product.repository');

exports.createProduct = async (body) => {
  const product = await ProductRepository.createProduct(body);
  return product;
};

exports.getAllProducts = async () => {
  const products = await ProductRepository.getAllProducts();
  return products;
};

exports.getProductByTitle = async (title) => {
  const product = await ProductRepository.getProductByTitle(title);
  return product;
}

exports.getProductById = async (id) => {
  const product = await ProductRepository.getProductById(id)
  return product;
};

exports.updateProduct = async (id, updateData) => {
  const product = await ProductRepository.getProductById(id);

  if (!product) return null;

  const updatedProduct = await ProductRepository.updateProduct(id, updateData);
  return updatedProduct;
};

exports.deleteProduct = async (id) => {
  const product = await ProductRepository.getProductById(id);
  if (!product) return false;

  await ProductRepository.deleteProduct(id);
  return true;
};
