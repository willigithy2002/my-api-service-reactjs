const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class User extends Model {}

User.init({
    noemp: {
        type: DataTypes.INTEGER,
        unique: true // adds id differently
    },
    name: {
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'Users'

})

module.exports = User