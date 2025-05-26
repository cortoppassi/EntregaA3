const SellersService = require('../services/seller.service');

exports.createSeller  = async (req, res) => {
  const { name, email, phone, cpf, registration_number, hire_date, active } = req.body

  if (!name || !email || !phone || !cpf || !registration_number || !hire_date || !active) {
    return res.status(400).json({ error: "Campos obrigatorios faltando" });
  };

  try {
    const seller = await SellersService.createSeller({
        name,
        email,
        phone,
        cpf,
        registration_number,
        hire_date,
        active
    })

    return res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar vendedor" });
  }
};

exports.getAllSellers = async (req, res) => {
  try {
    const seller = await SellersService.getAllSellers();
    return res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao buscar vendedores" });
  }
};

exports.getSellerById = async (req, res) => {
  const { id } = req.params;
  try {
    const seller = await SellersService.getSellerById(id);

    if (!seller) {
      return res.status(404).json({ error: "Vendedor não encontrado" })
    }

    return res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao buscar vendedor" });
  }
};

exports.updateSeller = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updateSeller = await SellersService.updateSeller(id, updateData);

    if (!updateSeller) {
      return res.status(404).json({ error: 'Vendedor não encontrado' });
    }

    return res.status(200).json(updateSeller);
  } catch (error) {
    console.error('Erro ao atualizar vendedor:', error);
    return res.status(500).json({ error: 'Erro interno ao atualizar vendedor' });
  }
};

exports.deleteSeller = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await SellersService.deleteSeller(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Vendedor não encontrado' });
    }

    return res.status(204).end();
  } catch (error) {
    console.error('Erro ao deletar vendedor:', error);
    return res.status(500).json({ error: 'Erro interno ao deletar vendedor' });
  }
};
