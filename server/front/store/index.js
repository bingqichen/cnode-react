'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (initState) {
  return finialStore(_reducers2.default, initState);
};

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finialStore = void 0;
if (process.env.NODE_ENV === 'production' || process.env.NODE_SERVER) {
  finialStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);
} else {
  finialStore = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()))(_redux.createStore);
}