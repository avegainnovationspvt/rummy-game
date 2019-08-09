const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/secret');
const async = require('async');

const   FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const secret = require('../config/secret');

//creating some options to authenticate and to fetch the tokens from header and then will create a new jwtstrategy which contains options and function which consists of payload where all the user information is present
module.exports = function(passport){
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.getUserById(jwt_payload._id, (err, user) => {
			if(err){
				return done(err, false);
			}

			if(user){
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	



	}));





	




	///fb login authertication


	passport.use(new FacebookStrategy(secret.facebook, (token, refreshToken, profile, done) => {

		User.findOne({facebook: profile.id}, (err, user) => {
			if (err);
	  ////if user is already logged return
			if (user) {
				return done(null, user);
			}
			
		  ///if user is not logged in
			else {
				async.waterfall([
					(callback) => {
						const newUser = new User();
						newUser.email = profile._json.email;
						newUser.facebook = profile.id;
						newUser.tokens.push({kind: 'facebook', token: token});
						newUser.profile.name = profile.displayName;
						 newUser.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
  
						newUser.save((err) => {
							if (err);
							callback(err, newUser._id);
						})
					},
			
				]);
  
			}
		});
	}));
  //

  ///google login

  


  
	passport.use(new GoogleStrategy(secret.google, (token, refreshToken, profile, done) => {
		console.log('taken' +token);

		User.findOne({google: profile.id}, (err, user) => {
			if (err);
	  ////if user is already logged return
			if (user) {
				return done(null, user);
			}
			
		  ///if user is not logged in
			else {
				async.waterfall([
					(callback) => {
						const newUser = new User();
						newUser.email = profile._json.email;
						newUser.google = profile.id;
						newUser.tokens.push({kind: 'google', token: token});
						newUser.profile.name = profile.displayName;

						 newUser.profile.picture = 'https://graph.google.com/' + profile.id + '/picture?type=large';
  
						newUser.save((err) => {
							if (err);
							callback(err, newUser._id);
						})
					},
			
				]);
  
			}
		});
	}));
  
  
  
}
  
  

	
	