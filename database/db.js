const { Sequelize } = require('sequelize')
const { database } = require('../config.')

const sequelize = new Sequelize(
    database.database, database.username, database.passwor, {
    host: database.host,
    dialect: "mysql"
}
);

module.exports = sequelize