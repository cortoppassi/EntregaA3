const ProductsService = require('../services/product.service');

exports.createProduct  = async (req, res) => {
  const { title, author, publisher, price, stock } = req.body

  if (!title || !author || !publisher || !price || !stock) {
    return res.status(400).json({ error: "Campos obrigatorios faltando" });
  };

  try {
    const product = await ProductsService.createProduct({
      title,
      author,
      publisher,
      price,
      stock
    })

    return res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductsService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao buscar produtos" });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductsService.getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" })
    }

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao buscar produto" });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await ProductsService.updateProduct(id, updateData);

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro interno ao atualizar produto' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await ProductsService.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return res.status(500).json({ error: 'Erro interno ao deletar produto' });
  }
};
