'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _topicDetail = require('../services/topicDetail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'topicDetail',

  state: {
    detail: {}
  },

  reducers: {
    getDetailSuccess: function getDetailSuccess(state, _ref) {
      var detail = _ref.payload;

      return (0, _extends3.default)({}, state, { detail: detail });
    },
    reset: function reset(state) {
      return (0, _extends3.default)({}, state, { detail: {} });
    }
  },

  effects: {
    getDetail: _regenerator2.default.mark(function getDetail(_ref2, _ref3) {
      var id = _ref2.payload;
      var call = _ref3.call,
          put = _ref3.put;
      var detail;
      return _regenerator2.default.wrap(function getDetail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_topicDetail.getDetailData, { id: id });

            case 2:
              detail = _context.sent;
              _context.next = 5;
              return put({ type: 'getDetailSuccess', payload: detail });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, getDetail, this);
    })
  },

  subscriptions: {}
};