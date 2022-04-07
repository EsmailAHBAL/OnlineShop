const { send } = require('express/lib/response');
const res = require('express/lib/response')
const {getAllProduct, getProductByCat}=require('../Module/Product')

exports.inTheHomePage =async(req,res)=>{

    //  getAllProduct().then(ress=>{

    // console.log(ress);

    
    //  });

     let category = req.query.category;
   
    // let checkCategory=["Clothing","mobile"]
    const obj = {
        a:"Clothing",
        b:"mobile"
    }
    
    category && Object.values(obj).includes(category)? (   getProductByCat(category).then(result=>{

        res.send(result)
        console.log(result);
       })
      ):(

     getAllProduct().then(result=>{

        res.send(result)
     })
      )
  

}