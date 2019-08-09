//Main server entry point file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const morgan=require('morgan');
//Mongo connection
mongoose.connect("mongodb://Sudeep36:sant0551@ds149616.mlab.com:49616/rummy");

// Initializing the app variable to express
const app = express();
// const config = require('../config/secret');


const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
// Making it public so that any domain can access it and can disable some rooutes if user doesn't send correct token
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/forgot-password', express.static(__dirname + 'public'));
app.use('/login', express.static(__dirname + 'public'));
app.use('/game', express.static(__dirname + 'pubic'));
app.use('/lobby', express.static(__dirname + 'public'));
app.use('/nav', express.static(__dirname + 'public '))
app.use('/otp', express.static(__dirname + 'public'));

// Body Parser Middleware
app.use(bodyParser.json());




////serailaztion'


//SERILIZATION
passport.serializeUser(function(user,done){


	done(null,user._id);   ///ntg ut dta form suer object storde in session
  });//her eit is we are storing id
  ///this seesion id is attahced to an object like this

  
  passport.deserializeUser(function(id,done){
  
  User.findById(id,function(err,user){
  
	done(err,user);///based on that we arefetching whole data
  
  });
})


// morgan


app.use(morgan('dev'));///request logger for nodejs ntg but whatevr erquets he made
//that will be shown
mongoose.set('useNewUrlParser', true);

app.use(bodyParser.json());//now our expres application can parse data to serer it receive it




// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);


// fb login



app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));




/**
 * Handles GET HTTP results from Facebook authentication
 */
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
   
    
    successRedirect: '/game',
}));



///google  oauth routes

app.get('/auth/google', passport.authenticate('google', {scope: 'email'}));




/**
 * Handles GET HTTP results from Facebook authentication
 */
app.get('/auth/google/callback', passport.authenticate('google', {
   
    
    successRedirect: '/lobby',
    failureRedirect:'/login'
}));












app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
	console.log('Server started on port '+port);
});