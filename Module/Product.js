const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()

const url =process.env.DB_URl;

const productSchema= mongoose.Schema({
    name :String,
    price:Number,
    image:String,
    description:String,
    category:String
})
let Product = mongoose.model('product',productSchema)

exports.getAllProduct =async()=>{

    //  mongoose.connect(url,(err)=>{

    //     if(err) console.log('Not connected');
         
    //       let n= Product ({
    //         name :"String",
    //         price:27,
    //         image:"String",
    //         description:"String",
    //         category:"String"
    //       })

    //       n.save((err,result)=>{

    //         console.log(result);
    //       })
    //  })

     return new Promise((resolve,reject)=>
     {
      
        mongoose.connect(url).then(()=>{

            return Product.find({})
        }).then(Products=>{
            // console.log(Products);
          resolve(Products) 
        
        }).catch((err)=>{
            reject(err)
        })

     });
}

exports.getProductByCat=async(cat)=> {

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{return Product.find({category:cat})}).then(result=>{

            resolve(result);
        }).catch((err)=>{reject(err)})
    })
}
const addnewPrduct=async(values)=>{


     return new Promise ((resolve , reject )=>{

        mongoose.connect(url).then(()=>{

           let n = new Product({
            name :values[0],
            price:values[1],
            image:values[2],
            description:values[3],
            category:values[4]
           })
        return    n.save()
  

        }).then(res=>{resolve(res)}).catch((err)=>{reject(err)})

     });

}


exports.ProductById =async(id)=>
{
 return new Promise((resolve,reject)=>{
  mongoose.connect(url)
  .then(()=>{return Product.find({_id:id})})
  .then(result =>{resolve(result);mongoose.disconnect()})
  .catch((err)=>reject(err))
 
 });

}



