'use strict';

const userData = require('../data/auroraAttire');

const getAllUser = async (req, res, next) => {
    try{
        const userlist = await userData.getUser();
        res.send(userlist);
    }catch(error){
        res.status(400).send(error.message)
    }
}
module.exports ={
    getAllUser
}
