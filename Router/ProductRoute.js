
const express = require("express");
const { getProductById } = require("../Controller/ProductController");
const RouteP = express.Router()

RouteP.get('/:id',getProductById)


module.exports=RouteP
