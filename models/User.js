var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email :{
      type:String,
      require:true
    },
    password:{
      type:String,
      require: true
    } ,
    userType: {
      type: String
    }
})
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  


var userModel = mongoose.model('User', UserSchema );    
module.exports = userModel;


