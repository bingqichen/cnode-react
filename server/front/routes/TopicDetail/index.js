'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _dva = require('dva');

var _utils = require('../../utils');

var _config = require('../../config');

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _replyItem = require('../../components/reply-item');

var _replyItem2 = _interopRequireDefault(_replyItem);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicDetail = function (_Component) {
  (0, _inherits3.default)(TopicDetail, _Component);

  function TopicDetail(props) {
    (0, _classCallCheck3.default)(this, TopicDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopicDetail.__proto__ || (0, _getPrototypeOf2.default)(TopicDetail)).call(this, props));

    _this.handleGoBack = _this.handleGoBack.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TopicDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          topicDetail = _props.topicDetail,
          location = _props.location;
      var id = location.query.id;

      if ((0, _stringify2.default)(topicDetail.detail) === '{}') {
        dispatch({ type: 'topicDetail/getDetail', id: id });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      dispatch({ type: 'topicDetail/reset' });
    }
  }, {
    key: 'handleGoBack',
    value: function handleGoBack() {
      this.context.router.goBack();
    }
  }, {
    key: 'render',
    value: function render() {
      var topicDetail = this.props.topicDetail;
      var detail = topicDetail.detail;

      return _react2.default.createElement(
        'div',
        { className: 'topicdetail-wrap' },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.handleGoBack },
          '\u8FD4\u56DE'
        ),
        _react2.default.createElement(
          'div',
          { id: 'main' },
          _react2.default.createElement(
            'div',
            { id: 'content' },
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'header topic_header' },
                _react2.default.createElement(
                  'span',
                  { className: 'topic_full_title' },
                  detail.top ? _react2.default.createElement(
                    'span',
                    { className: 'put_top' },
                    '\u7F6E\u9876'
                  ) : null,
                  detail.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'changes' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u53D1\u5E03\u4E8E',
                    (0, _utils.formatTime)(detail.create_at)
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u4F5C\u8005',
                    detail.loginname
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    detail.visit_count,
                    '\u6B21\u6D4F\u89C8'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u6765\u81EA',
                    _config.tabTypes[detail.tab]
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'inner topic' },
                _react2.default.createElement('div', { className: 'topic_content', dangerouslySetInnerHTML: { __html: detail.content } })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                  'span',
                  { className: 'col_fade' },
                  detail.reply_count,
                  '\u56DE\u590D'
                )
              ),
              detail.replies && detail.replies.length ? detail.replies.map(function (item) {
                return _react2.default.createElement(_replyItem2.default, { key: item.id, replyItem: item });
              }) : null
            )
          )
        )
      );
    }
  }]);
  return TopicDetail;
}(_react.Component);

TopicDetail.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicDetail: state.topicDetail
  };
};

exports.default = (0, _dva.connect)(mapStateToProps)(TopicDetail);