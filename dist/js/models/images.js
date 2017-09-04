'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
	id: String,
	user: String,
	userId: String,
	title: String,
	url: String,
	dateAdded: Date
}, { collection: 'images' });

module.exports = mongoose.model('Image', Image);