'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Members','asal',Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Members');
  }
};
