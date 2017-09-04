'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addImg = addImg;
exports.removeImg = removeImg;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addImg(dispatch, url, title, id, userId) {
	dispatch({ type: 'IMG_ADD_PENDING' });
	(0, _axios2.default)({
		url: '/api/addImg',
		params: {
			url: url,
			title: title,
			id: id,
			userId: userId
		}
	}).then(function (res) {
		dispatch({ type: 'IMG_ADD_SUCCESS', payload: res.data });
	}).catch(function (err) {
		console.log(err);
		dispatch({ type: 'IMG_ADD_FAIL' });
	});
}

function removeImg(dispatch, id, userId) {
	dispatch({ type: 'IMG_REMOVE_PENDING' });
	(0, _axios2.default)({
		url: '/api/removeImg',
		params: {
			id: id,
			userId: userId
		}
	}).then(function (res) {
		dispatch({ type: 'IMG_REMOVE_SUCCESS', payload: res.data });
	}).catch(function (err) {
		console.log(err);
		dispatch({ type: 'IMG_REMOVE_FAIL' });
	});
}