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

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = (_dec = (0, _reactRedux.connect)(function (state) {
	return {
		user: state.user
	};
}), _dec(_class = function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			var user = this.props.user;
			if (user) {
				return _react2.default.createElement(
					'section',
					{ id: 'nav' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/' },
						'Asd Album'
					),
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/user/' + user.twitter.username },
						'My Album'
					),
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/newpic' },
						'New Pic'
					),
					_react2.default.createElement(
						'a',
						{ href: '/signout' },
						'Sign out'
					),
					_react2.default.createElement(
						'div',
						{ id: 'footer' },
						_react2.default.createElement(
							'span',
							null,
							'App made'
						),
						_react2.default.createElement(
							'span',
							null,
							'by'
						),
						_react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'https://kennethlumalicay.github.io/portfolio/', target: '_blank' },
								'Kenneth Malicay'
							)
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'section',
					{ id: 'nav' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/' },
						'Asd Album'
					),
					_react2.default.createElement(
						'a',
						{ href: '/login' },
						'Login'
					),
					_react2.default.createElement(
						'div',
						{ id: 'footer' },
						_react2.default.createElement(
							'span',
							null,
							'App made'
						),
						_react2.default.createElement(
							'span',
							null,
							'by'
						),
						_react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'https://kennethlumalicay.github.io/portfolio/', target: '_blank' },
								'Kenneth Malicay'
							)
						),
						'          '
					)
				);
			}
		}
	}]);

	return Nav;
}(_react.Component)) || _class);
;

exports.default = Nav;