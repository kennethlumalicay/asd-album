'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Nav = require('./../containers/Nav.js');

var _Nav2 = _interopRequireDefault(_Nav);

var _Home = require('./../containers/Home.js');

var _Home2 = _interopRequireDefault(_Home);

var _User = require('./../containers/User.js');

var _User2 = _interopRequireDefault(_User);

var _NewPic = require('./../containers/NewPic.js');

var _NewPic2 = _interopRequireDefault(_NewPic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
	_inherits(Routes, _Component);

	function Routes() {
		_classCallCheck(this, Routes);

		return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
	}

	_createClass(Routes, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ id: 'route' },
				_react2.default.createElement(_Nav2.default, null),
				_react2.default.createElement(
					'div',
					{ id: 'content' },
					_react2.default.createElement(_reactRouterDom.Route, { component: ScrollToTop }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default, exact: true }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/user/', component: _User2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/newpic', component: _NewPic2.default })
				)
			);
		}
	}]);

	return Routes;
}(_react.Component);

;

var ScrollToTop = function ScrollToTop() {
	if (typeof window !== 'undefined') window.scrollTo(0, 0);
	return null;
};

exports.default = Routes;