const { validationResult } = require("express-validator");
const { createAccount, login } = require("../Module/User");

exports.adduser=(req,res)=>{
 
 
    if (validationResult(req).array().length!=0) return res.send(validationResult(req).array())

  const {username,email,password}=req.body

    createAccount(username,email,password).then(result=>{
    
       return  res.send(result)

    });

}

exports.toLogin =async(req,res)=>{
  const {email,password}=req.body

  login(email,password).then(result=>{
    req.session.userId=result
    res.send(result)
    console.log(result);
  })
}

exports.Tologout=async(req,res)=>{
 
  req.session.destroy(()=>{

    res.send('delete session')
  })
}