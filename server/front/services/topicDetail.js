'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailData = undefined;

var _utils = require('../utils');

var getDetailData = exports.getDetailData = function getDetailData(_ref) {
  var id = _ref.id;
  return _utils.axios.get('/topic/' + id).then(function (res) {
    return res.data;
  });
};