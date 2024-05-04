const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','123098varsh',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;