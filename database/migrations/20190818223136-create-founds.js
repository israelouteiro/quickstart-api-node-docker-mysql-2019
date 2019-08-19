'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable('Founds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false, 
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        allowNull: false, 
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Founds');
  }
};