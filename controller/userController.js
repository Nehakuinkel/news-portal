
const userModel = require('../models/User');
const bcrypt = require('bcryptjs');
var dotenv =  require('dotenv');
dotenv.config({path:'./config/config.env'})
const email = process.env.EMAIL;
const password = process.env.PASSWORD;



exports.users = (req,res,next)=> {
    res.render('login')
}
exports.register = (req,res,next) => {
  res.render('register');
}

exports.addUser = (req,res,next)=>{
 
let userDetails = new userModel({
    email:email,
    password:password,
    userType:"admin"
  })
  userDetails.save((err,result)=>{
if(err){
  throw err;
}
if(result){
  res.send("User Added SuccessFully");
}
  })
}


exports.getUser = function(req,res,next){
  let email = req.body.email;
  let enteredPassword = req.body.password;
  bcrypt.compare(enteredPassword, hash, function(err, result) {
    if(result == true){
        res.render('admin')
    }
    else{
      res.send("Incorrect Credentials");
    }
});

 
}