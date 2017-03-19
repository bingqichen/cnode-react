'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _TopicsList = require('./containers/TopicsList');

var _TopicsList2 = _interopRequireDefault(_TopicsList);

var _TopicDetail = require('./containers/TopicDetail');

var _TopicDetail2 = _interopRequireDefault(_TopicDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/topicslist' }),
    _react2.default.createElement(_reactRouter.Route, { path: 'topicslist', component: _TopicsList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'topicdetail', component: _TopicDetail2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _TopicsList2.default })
  )
);