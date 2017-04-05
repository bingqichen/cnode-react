'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'topicsList',

  state: {
    list: [],
    page: 1,
    tab: 'all',
    limit: 40
  },

  reducers: {
    changePage: function changePage(state, action) {
      return (0, _extends3.default)({}, state, { page: action.page });
    },
    getList: function getList(state, action) {
      return (0, _extends3.default)({}, state, { list: action.list });
    },
    changeTab: function changeTab(state, action) {
      return (0, _extends3.default)({}, state, { tab: action.tab });
    },
    reset: function reset(state) {
      return (0, _extends3.default)({}, state, {
        list: [],
        page: 1,
        tab: 'all',
        limit: 40
      });
    }
  },

  effects: {
    getList: _regenerator2.default.mark(function getList(action, _ref) {
      var call = _ref.call,
          put = _ref.put;
      var list;
      return _regenerator2.default.wrap(function getList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config.axios.get('/topics', { params: action.params }).then(function (res) {
                return res.data;
              });

            case 2:
              list = _context.sent;
              _context.next = 5;
              return put({ type: 'getList', list: list });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, getList, this);
    }),
    changePage: _regenerator2.default.mark(function changePage(action, _ref2) {
      var put = _ref2.put;
      return _regenerator2.default.wrap(function changePage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return put({ type: 'changePage', page: action.page });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, changePage, this);
    }),
    changeTab: _regenerator2.default.mark(function changeTab(action, _ref3) {
      var put = _ref3.put;
      return _regenerator2.default.wrap(function changeTab$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return put({ type: 'changeTab', tab: action.tab });

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, changeTab, this);
    }),
    reset: _regenerator2.default.mark(function reset(action, _ref4) {
      var put = _ref4.put;
      return _regenerator2.default.wrap(function reset$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return put({ type: 'reset' });

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, reset, this);
    })
  },

  subscriptions: {}
};