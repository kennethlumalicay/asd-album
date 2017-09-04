'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('./../actions/actions.js');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPic = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.user,
    img: state.img
  };
}), _dec(_class = function (_Component) {
  _inherits(NewPic, _Component);

  function NewPic(props) {
    _classCallCheck(this, NewPic);

    var _this = _possibleConstructorReturn(this, (NewPic.__proto__ || Object.getPrototypeOf(NewPic)).call(this, props));

    _this.state = {
      title: '',
      url: ''
    };
    _this.addImg = _this.addImg.bind(_this);
    _this.titleChange = _this.titleChange.bind(_this);
    _this.urlChange = _this.urlChange.bind(_this);
    return _this;
  }

  _createClass(NewPic, [{
    key: 'addImg',
    value: function addImg(e) {
      var userId = this.props.user.twitter.id;
      var id = userId + ~~(Date.now() * 7 / 777);
      actions.addImg(this.props.dispatch, this.state.url, this.state.title, id, userId);
      this.setState({
        title: '',
        url: ''
      });
    }
  }, {
    key: 'titleChange',
    value: function titleChange(e) {
      this.setState({ title: e.target.value });
    }
  }, {
    key: 'urlChange',
    value: function urlChange(e) {
      this.setState({ url: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'new-pic', className: 'ani-show' },
        _react2.default.createElement(
          'h1',
          null,
          'Add new picture!'
        ),
        _react2.default.createElement('input', { type: 'text', placeholder: 'Title', value: this.state.title, onChange: this.titleChange }),
        _react2.default.createElement('input', { type: 'text', placeholder: 'URL', value: this.state.url, onChange: this.urlChange }),
        _react2.default.createElement(
          'button',
          { onClick: this.addImg },
          'Submit'
        )
      );
    }
  }]);

  return NewPic;
}(_react.Component)) || _class);
;

exports.default = NewPic;