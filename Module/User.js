const {
    default: mongoose
} = require("mongoose");
 const bcrypt = require('bcrypt')

const dotenv = require('dotenv');
const { reject } = require("bcrypt/promises");
dotenv.config()
let url = process.env.DB_URL
let UserSchema = mongoose.Schema({

    username: String,
    email:String,
    password: String
})

let User = mongoose.model('user',UserSchema)
exports.createAccount =async(username,email,password)=>{

return new Promise ((resolve,reject)=>{



    mongoose.connect("mongodb://localhost:27017/test")
    .then(()=>{return User.findOne({email:email})})
    .then((user)=>{
        if(user) reject('Deja')
        else return bcrypt.hash(password,10)
    }).then(passHashed=>{
        let u = new User ({
            username:username,email:email,password:passHashed
        })
        return u.save()
    }).then(res=>{
        resolve(res)
    })
    .catch (err=>{reject(err)})

})
}

exports.login = async(email,password)=>
{
    return new Promise ((resolve,reject)=>{
        let idU;
     
mongoose.connect("mongodb://localhost:27017/test").then(()=>{
    return User.findOne({email:email})
})

.then(user=>{if(!user) reject('User Not exist')
else {
    let match = bcrypt.compare(password,user.password)
  idU=user._id
    return match
}})
.then(isPassword=>{
    if(!isPassword) reject('password incorrect')
    else {resolve(idU)}
}).catch(err=>{
    reject(err)
})
    });
}
