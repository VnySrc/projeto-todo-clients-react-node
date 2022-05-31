'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      priority: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: "normal",
      }
  },
      {
        tableName: "users",
        timestamps: false,
      }
)


 },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
  }
};
