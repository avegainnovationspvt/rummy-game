module.exports = {
	secret: 'yoursecret',



	facebook: {
		clientID: '341276020136512',
		clientSecret: 'a6f4cdc9667582c31f7922ebc4f0d68a',
		profileFields: ['emails', 'displayName'],
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	  },


	  google: {
		clientID: '313776418093-20toq9bhv4jiv2ph22t8g6rd0pph1ja2.apps.googleusercontent.com',
		clientSecret: 'p6n7vM3AjMR4KQkWx2vppJT_',
		
		callbackURL: 'http://localhost:3000/auth/google/callback'
	  },
}