const CustomerService = require('../services/customer.service');

class CustomerController {
    async create(req, res) {
                
        try {
            const customer = await CustomerService.createCustomer(req.body);
            return res.status(201).json(customer);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const customers = await CustomerService.getAllCustomers();
            return res.json(customers);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const customer = await CustomerService.getCustomerById(req.params.id);
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return res.json(customer);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const customer = await CustomerService.updateCustomer(req.params.id, req.body);
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return res.json(customer);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await CustomerService.deleteCustomer(req.params.id);
            if (!deleted) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new CustomerController();