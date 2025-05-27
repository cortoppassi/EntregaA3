const saleRepository = require('../repositories/sale.repository');

class SaleService {
    async createSale(saleData, saleItems) {
        return await saleRepository.createSale(saleData, saleItems);
    }

    async cancelSale(saleId) {
        return await saleRepository.cancelSale(saleId);
    }
}

module.exports = new SaleService();