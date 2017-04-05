'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.axios = undefined;

var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('./moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatTime = function formatTime(time) {
  var momentTime = (0, _moment2.default)(time).fromNow();
  return momentTime;
};

exports.axios = _axios2.default;
exports.formatTime = formatTime;