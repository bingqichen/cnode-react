'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeTopicsListPage = changeTopicsListPage;
exports.getTopicsList = getTopicsList;

var _config = require('../config');

var _constans = require('../constans');

var types = _interopRequireWildcard(_constans);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function changeTopicsListPage(page) {
  return {
    type: types.CHANGE_TOPICS_LIST_PAGE,
    page: page
  };
}

function getTopicsList(params) {
  return function (dispatch) {
    _config.axios.get('/topics', { params: params }).then(function (res) {
      dispatch({
        type: types.GET_TOPICS_LIST,
        list: res.data,
        page: params.page
      });
      dispatch(changeTopicsListPage(params.page));
    });
  };
}