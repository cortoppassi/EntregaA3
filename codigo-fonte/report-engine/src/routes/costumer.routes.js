const express = require('express');
const router = require("express").Router();
const CustomerController = require('../controllers/customer.controller');

router.post('/', CustomerController.create);
router.get('/', CustomerController.findAll);
router.get('/:id', CustomerController.findById);
router.put('/:id', CustomerController.update);
router.delete('/:id', CustomerController.delete);

module.exports = {
    alias: '/customers',
    router
}