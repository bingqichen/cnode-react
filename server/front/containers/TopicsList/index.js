'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _topicsList = require('../../actions/topicsList');

var topicsListActions = _interopRequireWildcard(_topicsList);

var _topicsItem = require('../../components/topics-item');

var _topicsItem2 = _interopRequireDefault(_topicsItem);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicsList = function (_Component) {
  (0, _inherits3.default)(TopicsList, _Component);

  function TopicsList(props) {
    (0, _classCallCheck3.default)(this, TopicsList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopicsList.__proto__ || (0, _getPrototypeOf2.default)(TopicsList)).call(this, props));

    _this.handleGetTopicsList = _this.handleGetTopicsList.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TopicsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var list = this.props.topicsList.list;

      if (!list.length) {
        this.handleGetTopicsList();
      }
    }
  }, {
    key: 'handleGetTopicsList',
    value: function handleGetTopicsList() {
      var _props = this.props,
          actions = _props.actions,
          topicsList = _props.topicsList;
      var page = topicsList.page,
          tab = topicsList.tab,
          limit = topicsList.limit,
          mdrender = topicsList.mdrender;

      var params = {
        page: page + 1,
        tab: tab,
        limit: limit,
        mdrender: mdrender
      };
      actions.getTopicsList(params);
    }
  }, {
    key: 'render',
    value: function render() {
      var list = this.props.topicsList.list;

      return _react2.default.createElement(
        'div',
        { className: 'topicslist-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'topics-list' },
          list.map(function (item) {
            return _react2.default.createElement(_topicsItem2.default, { key: item.id, topic: item });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'load-more' },
          _react2.default.createElement(
            _button2.default,
            { onClick: this.handleGetTopicsList },
            '\u52A0\u8F7D\u66F4\u591A'
          )
        )
      );
    }
  }]);
  return TopicsList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicsList: state.topicsList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)((0, _extends3.default)({}, topicsListActions), dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopicsList);