const { sequelize } = require('../models');

class CustomerRepository {
    async create(data) {
        try {
            const createdAt = new Date();
            const updatedAt = new Date();

            await sequelize.query(
                `INSERT INTO Customers (name, email, phone, cpf, createdAt, updatedAt)
   VALUES (:name, :email, :phone, :cpf, :createdAt, :updatedAt);`,
                {
                    replacements: {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        cpf: data.cpf,
                        createdAt,
                        updatedAt
                    },
                    type: sequelize.QueryTypes.INSERT,
                }
            );


            // Se quiser retornar o registro, pode buscar pelo último ID inserido
            // Exemplo simples, assumindo que id é auto-increment
            const [result] = await sequelize.query(
                'SELECT * FROM Customers WHERE id = LAST_INSERT_ID();',
                { type: sequelize.QueryTypes.SELECT }
            );
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findAll() {
        const results = await sequelize.query(
            `SELECT * FROM Customers;`,
            { type: sequelize.QueryTypes.SELECT }
        );
        return results;
    }

    async findById(id) {
        const results = await sequelize.query(
            `SELECT * FROM Customers WHERE id = :id LIMIT 1;`,
            {
                replacements: { id },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        return results[0] || null;

        return results[0] || null;
    }

    async update(id, data) {
        const customer = await this.findById(id);
        if (!customer) return null;

        const fields = [];
        const replacements = { id };

        if (data.name !== undefined) {
            fields.push('name = :name');
            replacements.name = data.name;
        }
        if (data.email !== undefined) {
            fields.push('email = :email');
            replacements.email = data.email;
        }
        if (data.phone !== undefined) {
            fields.push('phone = :phone');
            replacements.phone = data.phone;
        }
        if (data.cpf !== undefined) {
            fields.push('cpf = :cpf');
            replacements.cpf = data.cpf;
        }

        if (fields.length === 0) return customer;

        await sequelize.query(
            `UPDATE Customers SET ${fields.join(', ')} WHERE id = :id;`,
            {
                replacements,
                type: sequelize.QueryTypes.UPDATE,
            }
        );

        return await this.findById(id);
    }

    async delete(id) {
        const customer = await this.findById(id);
        if (!customer) return null;

        await sequelize.query(
            `DELETE FROM Customers WHERE id = :id;`,
            {
                replacements: { id },
                type: sequelize.QueryTypes.RAW,
            }
        );
        return true;
    }
}

module.exports = new CustomerRepository();
