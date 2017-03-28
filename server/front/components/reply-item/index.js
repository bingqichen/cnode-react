'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../util');



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var replyItem = props.replyItem;


  return _react2.default.createElement(
    'div',
    { className: 'cell reply_area reply_item' },
    _react2.default.createElement(
      'div',
      { className: 'author_content' },
      _react2.default.createElement(
        'a',
        { className: 'user_avatar' },
        _react2.default.createElement('img', { src: replyItem.author.avatar_url, alt: replyItem.author.loginname })
      ),
      _react2.default.createElement(
        'div',
        { className: 'user_info' },
        _react2.default.createElement(
          'a',
          { className: 'dark reply_author' },
          replyItem.author.loginname
        ),
        _react2.default.createElement(
          'a',
          { className: 'reply_time' },
          (0, _util.formatTime)(replyItem.create_at)
        )
      )
    ),
    _react2.default.createElement('div', { className: 'reply_content', dangerouslySetInnerHTML: { __html: replyItem.content } }),
    _react2.default.createElement('div', { className: 'clearfix' })
  );
};