'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'users',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          first_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          username: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          last_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deleted_at: {
            type: Sequelize.DATE,
          },
        },
        { transaction }
      );
      await queryInterface.addIndex(
        'users',
        ['email', 'created_at'],
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
