const { Seller } = require('../models')

exports.createSeller = async (body) => {
  const { name, email, phone, cpf, registration_number, hire_date, active } = body;

  try {
    const seller = await Seller.create({  name, email, phone, cpf, registration_number, hire_date, active });
    return seller;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.findAll = async () => {
  try {
    const sellers = await Seller.findAll();
    return sellers;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const seller = await Seller.findByPk(id);
    return seller;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.updateSeller = async (id, updateData) => {
  try {
    await Seller.update(updateData, { where: { id } });

    const updatedSeller = await Seller.findByPk(id);

    return updatedSeller;
  } catch (error) {
    console.error('Erro ao atualizar vendendor no repositório:', error);
    throw error;
  }
};

exports.deleteSeller = async (id) => {
  try {
    const seller = await Seller.findByPk(id);

    if(!seller) return null;

    await Seller.destroy({
      where: {
        id
      }
    });
  } catch (error) {
    console.error('Erro ao deletar no repositório:', error);
    throw error;
  }
};