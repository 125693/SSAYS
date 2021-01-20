const { Model, DataTypes } = require("sequelize")
const sequelize = require('../db')

class Movie extends Model { }
Movie.init({
    title: {
        type: DataTypes.STRING, allowNull: false, validate: {
            notNull: {
                msg: 'El campo no puede ser nulo'
            }
        }
    }
}, {
    sequelize,
    modelName: "movie"
})

module.exports = Movie