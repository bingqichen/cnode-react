'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

var _dvaLoading = require('dva-loading');

var _dvaLoading2 = _interopRequireDefault(_dvaLoading);

var _topicsList = require('./models/topicsList');

var _topicsList2 = _interopRequireDefault(_topicsList);

var _topicDetail = require('./models/topicDetail');

var _topicDetail2 = _interopRequireDefault(_topicDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (opts) {
  var app = (0, _dva2.default)(opts);

  app.use((0, _dvaLoading2.default)());

  app.model(_topicsList2.default);
  app.model(_topicDetail2.default);

  return app;
};