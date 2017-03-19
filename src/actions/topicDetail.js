import { axios } from '../config';

import * as types from '../constans';

export function getTopicDetail(id) {
  return dispatch => {
    axios.get(`/topic/${id}`)
      .then((res) => {
        dispatch({
          type: types.GET_TOPIC_DETAIL,
          detail: res.data
        });
      });
  };
}

export function resetTopicDetail() {
  return {
    type: types.RESET_TOPIC_DETAIL
  };
}
