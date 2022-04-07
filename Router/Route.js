const express = require("express");
const { inTheHomePage } = require("../Controller/controller");

const Route=express.Router();
Route.get('/',inTheHomePage)

module.exports=Route