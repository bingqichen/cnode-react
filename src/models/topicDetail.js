import { getDetailData } from '../services/topicDetail';

export default {
  namespace: 'topicDetail',

  state: {
    detail: {}
  },

  reducers: {
    getDetailSuccess(state, action) {
      return { ...state, detail: action.detail };
    },
    reset(state) {
      return { ...state, detail: {} };
    }
  },

  effects: {
    * getDetail(action, { call, put }) {
      const detail = yield call(getDetailData, { id: action.id });
      yield put({ type: 'getDetailSuccess', detail });
    }
  },

  subscriptions: {}
};
