// template
const express = require('express')
const cors = require('cors')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log('databse ready'))

// think
const userEndpoint = require('./routes/users')

// template
const app = express()
app.use(cors())
app.use(express.json()) // can be used for communication between backend and the others

// think

app.use('/', userEndpoint)

// template
app.listen(port, () => console.log(`running server on port ${port}`))