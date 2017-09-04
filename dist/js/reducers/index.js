'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerUser = require('./reducer-user');

var _reducerUser2 = _interopRequireDefault(_reducerUser);

var _reducerImg = require('./reducer-img');

var _reducerImg2 = _interopRequireDefault(_reducerImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = (0, _redux.combineReducers)({
    user: _reducerUser2.default,
    img: _reducerImg2.default
});

exports.default = allReducers;