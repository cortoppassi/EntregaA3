const { Customer } = require('../models');

class CustomerRepository {
    async create(data) {
        return await Customer.create(data);
    }

    async findAll() {
        return await Customer.findAll();
    }

    async findById(id) {
        return await Customer.findByPk(id);
    }

    async update(id, data) {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        return await customer.update(data);
    }

    async delete(id) {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        await customer.destroy();
        return true;
    }
}

module.exports = new CustomerRepository();