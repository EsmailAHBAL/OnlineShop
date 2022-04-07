const express = require("express");
const { check } = require("express-validator");
const { adduser, toLogin, Tologout } = require("../Controller/UserController");

const RouteU = express.Router()
RouteU.post('/',
 check('username').not().isEmpty(),
 check('email').not().isEmpty().isEmail(),
 check('password').isLength({min:5})
,adduser)
RouteU.post('/login',toLogin)
RouteU.all('/logout',Tologout)


module.exports=RouteU
