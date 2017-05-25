'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT(4,2),
    appetizer: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    wing: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    salad: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    oyster: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    sandwich: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    platter: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    taco: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    entree: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    side: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    beveage: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    },
    kids: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menu;
};