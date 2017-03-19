import { axios } from '../config';

import * as types from '../constans';

export function changeTopicsListPage(page) {
  return {
    type: types.CHANGE_TOPICS_LIST_PAGE,
    page
  };
}

export function getTopicsList(params) {
  return dispatch => {
    axios.get('/topics', { params })
      .then((res) => {
        dispatch({
          type: types.GET_TOPICS_LIST,
          list: res.data,
          page: params.page
        });
        dispatch(changeTopicsListPage(params.page));
      });
  };
}
