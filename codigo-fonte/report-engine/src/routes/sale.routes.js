const express = require('express');
const saleController = require('../controllers/sale.controller');

const router = express.Router();

router.post('/', saleController.createSale);
router.put('/cancel/:id', saleController.cancelSale);

module.exports = {
    alias: '/sales',
    router
};