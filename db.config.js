const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('employee_reactjs', 'root','',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize