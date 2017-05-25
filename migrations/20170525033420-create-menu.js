'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT(4,2)
      },
      appetizer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      wing: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      salad: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      oyster: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sandwich: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      platter: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      taco: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      entree: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      side: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      beveage: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      kids: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Menus');
  }
};