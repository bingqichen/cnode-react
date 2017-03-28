'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabTypes = exports.axios = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.baseURL = 'https://cnodejs.org/api/v1';
_axios2.default.interceptors.response.use(function (res) {
  return res.data;
});

var tabTypes = {
  all: '全部',
  ask: '问答',
  share: '分享',
  job: '招聘',
  good: '精华'
};

exports.axios = _axios2.default;
exports.tabTypes = tabTypes;