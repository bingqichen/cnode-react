'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _router = require('dva/router.js');

var _topicsList = require('../services/topicsList');

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
    changePage: function changePage(state, _ref) {
      var page = _ref.payload;

      return (0, _extends3.default)({}, state, { page: page });
    },
    getListSuccess: function getListSuccess(state, _ref2) {
      var list = _ref2.payload;

      return (0, _extends3.default)({}, state, { list: list });
    },
    changeTab: function changeTab(state, _ref3) {
      var tab = _ref3.payload;

      return (0, _extends3.default)({}, state, { tab: tab });
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
    getList: _regenerator2.default.mark(function getList(_ref4, _ref5) {
      var _ref4$payload = _ref4.payload,
          page = _ref4$payload.page,
          tab = _ref4$payload.tab,
          limit = _ref4$payload.limit;
      var call = _ref5.call,
          put = _ref5.put;
      var list;
      return _regenerator2.default.wrap(function getList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_topicsList.getListData, { page: page, tab: tab, limit: limit });

            case 2:
              list = _context.sent;
              _context.next = 5;
              return put(_router.routerRedux.push('/topicslist?page=' + page + '&tab=' + tab));

            case 5:
              _context.next = 7;
              return put({ type: 'getListSuccess', payload: list });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, getList, this);
    })
  },

  subscriptions: {}
};