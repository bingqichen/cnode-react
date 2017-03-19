'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var className = props.className,
      children = props.children,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      _props$onClick = props.onClick,
      onClick = _props$onClick === undefined ? function () {} : _props$onClick;


  var cls = (0, _classnames2.default)('component-button-wrap', className);

  return _react2.default.createElement(
    'button',
    {
      className: cls,
      disabled: disabled,
      onClick: onClick
    },
    children
  );
};