const express = require('express')
const User = require('../models/users')
const router = express.Router()
const UsersModel = require('../models/users')


// routing endpoint main user
router.get('/', async(req, res) => {
    const users = await UsersModel.findAll()
    res.status(200).json({
        "data": users,
        "metadata": "Test user endpoint"
    })
})

// post statement
router.post('/', async(req,res)=>{
    const {noemp, name, password} = req.body

    const users = await UsersModel.create({
        noemp, name, password
    })
    res.status(200).json({
        "data": users,
        "metadata": "Test post endpoint"
    })
})

// put statement
router.put('/', async(req,res)=>{
    const {noemp, name, password, newPassword} = req.body

    const userData = await UsersModel.findOne /* Update for only 1 user */  ({
        where: {noemp: noemp}
    })

    console.log(userData)

    if (userData.password === password){
        const users = await UsersModel.update({
            name, password:newPassword
        },{
            where: {noemp: noemp}
        })

        res.status(200).json({
            userData
        })
    } else {
        res.status(400),json({
            error:"invalid data received"
         })
    }
    
    //====================================================//
    /*
    const users = await UsersModel.create({
        noemp, name, password
    })
    res.status(200).json({
        "data": users,
        "metadata": "Test post endpoint"
    })
    */
    //====================================================//

})

//module exports
module.exports = router 