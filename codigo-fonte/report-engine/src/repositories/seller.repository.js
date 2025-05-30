const { sequelize } = require('../models');

exports.createSeller = async (body) => {
  const {
    name,
    email,
    phone,
    cpf,
    registration_number,
    hire_date,
    active = true,
  } = body;

  const createdAt = new Date();
  const updatedAt = new Date();
  try {
    const [result] = await sequelize.query(
      `INSERT INTO \`Sellers\` 
    (name, email, phone, cpf, registration_number, hire_date, active, createdAt, updatedAt)
   VALUES 
    (:name, :email, :phone, :cpf, :registration_number, :hire_date, :active, :createdAt, :updatedAt);`,
      {
        replacements: {
          name,
          email,
          phone,
          cpf,
          registration_number,
          hire_date,
          active,
          createdAt,
          updatedAt,
        },
      }
    );

    const insertedId = result.insertId;

    if (!insertedId) return null;

    const [rows] = await sequelize.query(
      `SELECT * FROM \`Sellers\` WHERE id = :id LIMIT 1;`,
      {
        replacements: { id: insertedId },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return rows[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.findAll = async () => {
  try {
    const [sellers] = await sequelize.query(`SELECT * FROM Sellers;`);
    return sellers;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const [result] = await sequelize.query(
      `SELECT * FROM Sellers WHERE id = :id LIMIT 1;`,
      { replacements: { id } }
    );
    return result[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updateSeller = async (id, updateData) => {
  try {
    const keys = Object.keys(updateData);
    const setClause = keys.map((key, i) => `\`${key}\` = :value${i}`).join(', ');

    const replacements = { id };
    keys.forEach((key, i) => {
      replacements[`value${i}`] = updateData[key];
    });

    await sequelize.query(
      `UPDATE \`Sellers\` SET ${setClause} WHERE id = :id;`, 
      { replacements }
    );

    const [result] = await sequelize.query(
      `SELECT * FROM \`Sellers\` WHERE id = :id LIMIT 1;`,
      { replacements: { id } }
    );

    return result[0];
  } catch (error) {
    console.error('Erro ao atualizar vendedor no repositório:', error);
    throw error;
  }
};

exports.deleteSeller = async (id) => {
  try {
    const [result] = await sequelize.query(
      'SELECT * FROM `Sellers` WHERE id = :id LIMIT 1;',
      { replacements: { id } }
    );

    const seller = result[0];
    if (!seller) return null;

    await sequelize.query(
      'DELETE FROM `Sellers` WHERE id = :id;',
      { replacements: { id } }
    );

    return true;
  } catch (error) {
    console.error('Erro ao deletar no repositório:', error);
    throw error;
  }
};
