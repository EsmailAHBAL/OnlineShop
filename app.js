const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

const Route = require('./Router/Route');
const RouteP = require('./Router/ProductRoute');
const RouteU = require('./Router/UserRoute');
const session = require('express-session')
const StoreSession= require('connect-mongodb-session')(session)
dotenv.config();
const Store = new StoreSession({

uri:process.env.DB_URL,
collection:'sessions',

});
const port = 3005
const bodyParserJson= bodyParser.json();
app.use(session({
    secret:"hsh8755-_''jhh",
    saveUninitialized:false,
    store:Store
    
}))
app.use(cors());
app.use(bodyParserJson)
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',Route)
app.use('/product',RouteP)
app.use('/user',RouteU)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))