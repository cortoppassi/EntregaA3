const CustomerRepository = require('../repositories/customer.repository.js');

class CustomerService {
  async createCustomer(data) {
    return await CustomerRepository.create(data);
  }

  async getAllCustomers() {
    return await CustomerRepository.findAll();
  }

  async getCustomerById(id) {
    const customer = await CustomerRepository.findById(id);
    if (!customer) throw new Error('Customer not found');
    return customer;
  }

  async updateCustomer(id, data) {
    const customer = await CustomerRepository.update(id, data);
    if (!customer) throw new Error('Customer not found');
    return customer;
  }

  async deleteCustomer(id) {
    const deleted = await CustomerRepository.delete(id);
    if (!deleted) throw new Error('Customer not found');
    return deleted;
  }
}

module.exports = new CustomerService();
