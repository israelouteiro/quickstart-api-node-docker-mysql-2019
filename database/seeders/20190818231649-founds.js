'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Founds', [{
        value: 'R$ 5.000' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        value: 'R$ 10.000' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        value: 'R$ 20.000' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        value: 'R$ 30.000' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        value: 'R$ 50.000' ,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => { 
      return queryInterface.bulkDelete('Founds', null, {});
  }
};
