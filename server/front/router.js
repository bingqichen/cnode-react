'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _App = require('./routes/App');

var _App2 = _interopRequireDefault(_App);

var _TopicsList = require('./routes/TopicsList');

var _TopicsList2 = _interopRequireDefault(_TopicsList);

var _TopicDetail = require('./routes/TopicDetail');

var _TopicDetail2 = _interopRequireDefault(_TopicDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _router.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_router.IndexRedirect, { to: '/topicslist' }),
    _react2.default.createElement(_router.Route, { path: 'topicslist', component: _TopicsList2.default }),
    _react2.default.createElement(_router.Route, { path: 'topicdetail', component: _TopicDetail2.default }),
    _react2.default.createElement(_router.Route, { path: '*', component: _TopicsList2.default })
  )
);

exports.default = function (_ref) {
  var history = _ref.history;
  return _react2.default.createElement(
    _router.Router,
    { history: history },
    _react2.default.createElement(
      _router.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(_router.IndexRedirect, { to: '/topicslist' }),
      _react2.default.createElement(_router.Route, { path: 'topicslist', component: _TopicsList2.default }),
      _react2.default.createElement(_router.Route, { path: 'topicdetail', component: _TopicDetail2.default }),
      _react2.default.createElement(_router.Route, { path: '*', component: _TopicsList2.default })
    )
  );
};