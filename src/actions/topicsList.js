import { axios } from '../config';

import * as types from '../constans';

export function getTopicsList(params) {
  return dispatch => {
    axios.get('/topics', { params })
      .then((res) => {
        dispatch({
          type: types.GET_TOPICS_LIST,
          list: res.data
        });
      });
  };
}

export function changeTopicsListPage(page) {
  return {
    type: types.CHANGE_TOPICS_LIST_PAGE,
    page
  };
}

export function changeTopicsListTab(tab) {
  return {
    type: types.CHANGE_TOPICS_LIST_TAB,
    tab
  };
}

export function resetTopicsList() {
  return {
    type: types.RESET_TOPICS_LIST
  };
}
