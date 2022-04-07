const { ProductById } = require("../Module/Product");

exports.getProductById =async (req,res)=>{

    let id = req.params.id

    ProductById(id).then(result=>{

        res.send(result);
    })

}