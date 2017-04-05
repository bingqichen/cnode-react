'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListData = undefined;

var _utils = require('../utils');

var getListData = exports.getListData = function getListData(_ref) {
  var params = _ref.params;
  return _utils.axios.get('/topics', { params: params }).then(function (res) {
    return res.data;
  });
};