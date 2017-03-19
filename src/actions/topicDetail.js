import { axios } from '../config';

import * as types from '../constans';

export function getTopicDetail(params) {
  return dispatch => {
    axios.get(`/topic/${params.id}`, { params })
      .then((res) => {
        dispatch({
          type: types.GET_TOPIC_DETAIL,
          detail: res.data
        });
      });
  };
}
