require('dotenv').config()
const express = require("express");
const app = express()
const ejs = require('ejs')
const path=require('path')
const bodyParser = require("body-parser");
const expressLayout=require('express-ejs-layouts')
const mongoose = require('mongoose')
const session= require('express-session')
const flash= require('express-flash')
//const MongoDbStore= require('connect-mongo')
const passport = require('passport')


const secretKey="secretKey"

//session configure
app.use(session({
  secret: secretKey,
  resave: false,
  //store:mongoStore,
  saveUninitialized: false,
  // cookie:{maxage:1000*60*60*24}
})
);

//passport config
const passportInit = require('./app/config/passport');
passportInit(passport);
app.use(passport.initialize());;
app.use(passport.session())

app.use(flash())

//connection of mongodb
mongoose.connect('mongodb://127.0.0.1:27017/pizza')
const connection= mongoose.connection
connection.on('error',(error)=>console.error(error));
connection.once('open',()=>console.log('connected'))





//session store
//   let mongoStore = new MongoDbStore({
// mongooseConnection:connection,
// collection:'sessions'
// })




app.use(express.urlencoded({extended:false}))
app.use(express.static("public"));
app.use(express.json())




const PORT= process.env.PORT || 3300





 
app.use(expressLayout)
app.set('views',path.join('./resources/views'))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//setup of session





require('./routes/web')(app)

app.listen(PORT, ()=>{
    console.log("listening on port 3000")
})