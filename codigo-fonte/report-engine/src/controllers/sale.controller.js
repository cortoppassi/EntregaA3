const saleService = require('../services/sale.service');

class SaleController {
  async createSale(req, res) {
    const { customerId, sellerId, total_value, items } = req.body;

    try {
      const sale = await saleService.createSale(
        { customerId, sellerId, total_value },
        items
      );
      return res.status(201).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async cancelSale(req, res) {
    const { id } = req.params;

    try {
      const sale = await saleService.cancelSale(id);
      return res.status(200).json({ message: 'Sale canceled successfully', sale });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new SaleController();

