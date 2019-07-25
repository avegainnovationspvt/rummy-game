const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/secret');

// User Schema
const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	contact: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	// AdharNumber:{
	// 	type:String,
	// 	required:true
	// },
	// Pan:{
	// 	type:String,
	// 	required:true
	// },
	// BankAccount:{
	// 	type:String,
	// 	required:true
	// }
	
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


//getting adhar number'

// module.exports.getUserByAdharNumber = function(AdharNumber, callback){
// 	const query = {AdharNumber: AdharNumber}
// 	User.findOne(query, callback);
// }

// module.exports.getUserByPan = function(Pan, callback){
// 	const query = {Pan:Pan}
// 	User.findOne(query, callback);
// }

// module.exports.getUserByBankAccount = function(BankAccount, callback){
// 	const query = {BankAccount: BankAccount}
// 	User.findOne(query, callback);
// }

//end data


//genSalt is a function which generates a random key which is used to hashed the password
//Function for inserting the user in the database
module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

//Function for comparing the password
module.exports.comparePassword =  function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}
