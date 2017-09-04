'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addImg = addImg;
exports.removeImg = removeImg;

var _images = require('./../models/images.js');

var _images2 = _interopRequireDefault(_images);

var _users = require('./../models/users.js');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function send(user, cb) {
	_images2.default.find(function (err, data) {
		if (err) console.log(err);
		cb({
			user: user,
			images: data
		});
	});
}

function addImg(query, cb) {
	_users2.default.findOne({ 'twitter.id': query.userId }, function (err, data) {
		if (err) console.log(err);
		data.imgIds.push(query.id);
		data.save(function (err) {
			if (err) console.log(err);
			var newImg = new _images2.default({
				id: query.id,
				user: data.twitter.username,
				userId: data.twitter.id,
				title: query.title,
				url: query.url,
				date: new Date()
			});
			newImg.save(function (err) {
				if (err) console.log(err);
				send(data, cb);
			});
		});
	});
}

function removeImg(query, cb) {
	_users2.default.findOne({ 'twitter.id': query.userId }, function (err, data) {
		if (err) console.log(err);
		data.imgIds = data.imgIds.filter(function (e) {
			return e !== query.imgId;
		});
		data.save(function (err) {
			if (err) console.log(err);
			_images2.default.findOneAndRemove({ id: query.id }, function (err) {
				if (err) console.log(err);
				send(data, cb);
			});
		});
	});
}
/*
export function findUser(query, cb) {
	Users.findOne({'twitter.id': query.userId}, (err,data) => {
		if(err) console.log(err);
		cb(data);
	});
}*/