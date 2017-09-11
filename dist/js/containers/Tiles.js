'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('./../actions/actions.js');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tiles = (_dec = (0, _reactRedux.connect)(function (state) {
	return {
		user: state.user,
		img: state.img
	};
}), _dec(_class = function (_Component) {
	_inherits(Tiles, _Component);

	function Tiles() {
		_classCallCheck(this, Tiles);

		return _possibleConstructorReturn(this, (Tiles.__proto__ || Object.getPrototypeOf(Tiles)).apply(this, arguments));
	}

	_createClass(Tiles, [{
		key: 'deleteImg',
		value: function deleteImg(e) {
			actions.removeImg(this.props.dispatch, e.target.getAttribute('data-value'), this.props.user.twitter.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var user = this.props.user ? this.props.user.twitter.username : null;
			var list = this.props.list ? this.props.list : this.props.img;
			var title = this.props.title;
			return _react2.default.createElement(
				'section',
				{ id: 'tiles' },
				title ? _react2.default.createElement(
					'h1',
					null,
					title
				) : null,
				_react2.default.createElement(
					'div',
					{ className: 'img-tiles', ref: 'imgTiles' },
					list.length ? list.map(function (e, i) {
						return _react2.default.createElement(
							'div',
							{ className: 'img', key: i },
							_react2.default.createElement(
								'h2',
								{ title: e.title },
								e.title.length < 19 ? e.title : e.title.substring(0, 16).trim() + '...'
							),
							_react2.default.createElement('img', { src: e.url, alt: e.title }),
							user === e.user ? _react2.default.createElement(
								'button',
								{ 'data-value': e.id, onClick: _this2.deleteImg.bind(_this2) },
								'Delete'
							) : e.user !== title ? _react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/user/' + e.user + '?' + e.userId },
								e.user
							) : null
						);
					}) : _react2.default.createElement(
						'h1',
						null,
						'Send new pic!'
					)
				)
			);
		}
	}]);

	return Tiles;
}(_react.Component)) || _class);
;

exports.default = Tiles;