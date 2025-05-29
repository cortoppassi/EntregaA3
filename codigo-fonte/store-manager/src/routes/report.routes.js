const router = require('express').Router();
const reportController = require('../controllers/report.controller');

router.get('/best-selling', reportController.getBestSellingProducts);
router.get('/by-customer/:customerId', reportController.getProductsPurchasedByCustomer);
router.get('/average-consumption', reportController.getAverageConsumptionPerCustomer);
router.get('/low-stock', reportController.getLowStockProducts);

module.exports = { alias: '/reports', router };
