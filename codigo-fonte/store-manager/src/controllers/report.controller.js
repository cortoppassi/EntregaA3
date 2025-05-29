const reportService = require('../services/report.service');

module.exports = {
  async getBestSellingProducts(req, res) {
    try {
      const data = await reportService.getBestSellingProducts();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching best-selling products', details: err.message });
    }
  },

  async getProductsPurchasedByCustomer(req, res) {
    try {
      const { customerId } = req.params;
      const data = await reportService.getProductsPurchasedByCustomer(customerId);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching products by customer', details: err.message });
    }
  },

  async getAverageConsumptionPerCustomer(req, res) {
    try {
      const data = await reportService.getAverageConsumptionPerCustomer();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching average consumption', details: err.message });
    }
  },

  async getLowStockProducts(req, res) {
    try {
      const data = await reportService.getLowStockProducts();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching low stock products', details: err.message });
    }
  },
};
