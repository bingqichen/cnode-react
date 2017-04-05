import { getDetailData } from '../services/topicDetail';

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
      const detail = yield call(getDetailData, { id: action.id });
      yield put({ type: 'getDetail', detail });
    },
    * reset(action, { put }) {
      yield put({ type: 'reset' });
    }
  },

  subscriptions: {}
};
