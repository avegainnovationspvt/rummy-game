const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/secret');

// User Schema
const UserSchema = mongoose.Schema({
	username: {
		type: String,
		unique	: true
	},
	contact: {
		type: String,
		unique: true
	},
	password: {
		type: String,
		unique: true
	}, 
	
	
	facebook: String,
tokens: Array,
password:String,
profile:{

  name:{ type:String,default:'' },
  picture:{ type:String,default:''}
},
google: String,
tokens: Array,
email:String,
password:String,
profile:{

  name:{ type:String,default:'' },
  picture:{ type:String,default:''}
},
verified: {
	type: Number,
	unique: true
},



AdharNumber:{
	type:String,
	unique:true
},
Pan:{
	type:String,
	unique:true
},
BankAccount:{
	type:String,
	unique:true
},


});

const User = module.exports = mongoose.model('User', UserSchema);

// Function for getting the user by their id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//Funtion for getting the user by the username
module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback);
}




module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

// Function for comparing the password
module.exports.comparePassword =  function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err);
		callback(null, isMatch);
	});
}
// // 


