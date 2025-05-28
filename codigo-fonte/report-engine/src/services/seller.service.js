const SellerRepository = require('../repositories/seller.repository');

exports.createSeller = async (body) => {
  const seller = await SellerRepository.createSeller(body);
  return seller;
};

exports.getAllSellers = async () => {
  const sellers = await SellerRepository.findAll();
  return sellers;
};

exports.getSellerById = async (id) => {
  const seller = await SellerRepository.findById(id)
  return seller;
};

exports.updateSeller = async (id, updateData) => {
  const seller = await SellerRepository.findById(id);

  if (!seller) return null;

  const updatedSeller = await SellerRepository.updateSeller(id, updateData);
  return updatedSeller;
};

exports.deleteSeller = async (id) => {
  const seller = await SellerRepository.findById(id);
  if (!seller) return false;

  await SellerRepository.deleteSeller(id);
  return true;
};
