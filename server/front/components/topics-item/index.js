'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _avatar = require('../avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _util = require('../../util');



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var className = props.className,
      topic = props.topic;


  var cls = (0, _classnames2.default)('component-topics-item-wrap', className);

  return _react2.default.createElement(
    'div',
    { className: cls },
    _react2.default.createElement(
      'div',
      { className: 'avatar' },
      _react2.default.createElement(_avatar2.default, { avatar: topic.author.avatar_url })
    ),
    topic.top ? _react2.default.createElement(
      'div',
      { className: 'top' },
      '\u7F6E\u9876'
    ) : null,
    topic.good ? _react2.default.createElement(
      'div',
      { className: 'good' },
      '\u7CBE\u534E'
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'title' },
      topic.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'other' },
      _react2.default.createElement(
        'div',
        { className: 'last-reply' },
        (0, _util.formatTime)(topic.last_reply_at)
      ),
      _react2.default.createElement(
        'div',
        { className: 'reply-visit' },
        _react2.default.createElement(
          'span',
          { className: 'orange-color' },
          topic.reply_count
        ),
        '\uFF0F',
        _react2.default.createElement(
          'span',
          { className: 'light-color' },
          topic.visit_count
        )
      )
    )
  );
};