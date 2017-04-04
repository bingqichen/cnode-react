import { axios } from '../config';

export default {
  namespace: 'topicDetail',

  state: {
    detail: {}
  },

  reducers: {
    getDetail(state, action) {
      return { ...state, detail: action.detail };
    },
    reset(state) {
      return { ...state, detail: {} };
    }
  },

  effects: {
    * getDetail(action, { call, put }) {
      const detail = yield axios.get(`/topic/${action.id}`)
        .then(res => res.data);
      yield put({ type: 'getDetail', detail });
    },
    * reset(action, { put }) {
      yield put({ type: 'reset' });
    }
  },
  subscriptions: {}
};
