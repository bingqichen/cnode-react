'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _topicDetail = require('../../actions/topicDetail');

var topicDetailActions = _interopRequireWildcard(_topicDetail);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicDetail = function (_Component) {
  (0, _inherits3.default)(TopicDetail, _Component);

  function TopicDetail(props) {
    (0, _classCallCheck3.default)(this, TopicDetail);
    return (0, _possibleConstructorReturn3.default)(this, (TopicDetail.__proto__ || (0, _getPrototypeOf2.default)(TopicDetail)).call(this, props));
  }

  (0, _createClass3.default)(TopicDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          actions = _props.actions,
          topicDetail = _props.topicDetail,
          location = _props.location;
      var id = location.query.id;

      if ((0, _stringify2.default)(topicDetail.detail) === '{}') {
        actions.getTopicDetail(id);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var actions = this.props.actions;

      actions.resetTopicDetail();
    }
  }, {
    key: 'render',
    value: function render() {
      var topicDetail = this.props.topicDetail;
      var detail = topicDetail.detail;

      return _react2.default.createElement('div', { className: 'topicdetail-wrap' });
    }
  }]);
  return TopicDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicDetail: state.topicDetail
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)((0, _extends3.default)({}, topicDetailActions), dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopicDetail);