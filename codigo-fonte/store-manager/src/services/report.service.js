const reportRepository = require('../repositories/report.repository');

module.exports = {
  getBestSellingProducts: async () => {
    return await reportRepository.findBestSellingProducts();
  },

  getProductsPurchasedByCustomer: async (customerId) => {
    return await reportRepository.findProductsByCustomer(customerId);
  },

  getAverageConsumptionPerCustomer: async () => {
    return await reportRepository.findAverageConsumptionPerCustomer();
  },

  getLowStockProducts: async () => {
    return await reportRepository.findLowStockProducts();
  }
};
