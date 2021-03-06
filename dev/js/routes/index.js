var path = process.cwd();
var api = require('./../api/api.js');

module.exports = function (app, passport) {
	app.route('/login')
		.get(function (req, res) {
			res.redirect('/auth/twitter');
		});

	app.route('/signout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/');
		});

	app.route('/auth/twitter')
		.get(passport.authenticate('twitter'));

	app.route('/auth/twitter/callback')
		.get(passport.authenticate('twitter', {
			successRedirect: '/',
			failureRedirect: '/'
		}));

	app.route('/api/addImg')
		.get((req, res) => {
			api.addImg(req.query, e => res.send(e));
		});

	app.route('/api/removeImg')
		.get((req, res) => {
			api.removeImg(req.query, e => res.send(e));
		});
/*
	app.route('/api/findUser')
		.get((req, res) => {
			api.findUser(req.query, e => res.send(e));
		});*/
};
