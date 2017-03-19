'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _topicsList = require('./topicsList.js');

var _topicsList2 = _interopRequireDefault(_topicsList);

var _topicDetail = require('./topicDetail.js');

var _topicDetail2 = _interopRequireDefault(_topicDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  app: _app2.default,
  topicsList: _topicsList2.default,
  topicDetail: _topicDetail2.default
});