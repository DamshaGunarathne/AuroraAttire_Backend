'use strict';

const express = require('express');
const userControll = require('../controllers/userController');
const router = express.Router();

const {getAllUser}=userControll

router.get('/auroraattire/getAllUser', getAllUser);


module.exports={
    routes: router
}