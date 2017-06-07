'use strict';

var _router = require('dva/router');

var _reduxLogger = require('redux-logger');

var _createApp = require('./createApp.js');

var _createApp2 = _interopRequireDefault(_createApp);

var _router2 = require('./router');

var _router3 = _interopRequireDefault(_router2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  history: _router.browserHistory,
  initialState: window.__INITIAL_STATE__
};

if (process.env.NODE_ENV !== 'production') {
  opts.onAction = (0, _reduxLogger.createLogger)();
}

var app = (0, _createApp2.default)(opts);
app.router(_router3.default);
app.start('#root');