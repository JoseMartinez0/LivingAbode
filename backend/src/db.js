const { DB_DEPLOY } = require("./config");
const { Sequelize } = require("sequelize");


//? CONNECTION
const dataBase = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
    //   dialectOptions:{
    //     ssl:{
    //       require: true,
    //     }
    // }
  
  });


  module.exports = {
    dataBase,
    ...dataBase.models,
  };