import { getDetailData } from '@/services/topicDetail';

export default {
  namespace: 'topicDetail',

  state: {
    detail: {}
  },

  reducers: {
    getDetailSuccess(state, { payload: detail }) {
      return { ...state, detail };
    },
    reset(state) {
      return { ...state, detail: {} };
    }
  },

  effects: {
    * getDetail({ payload: id }, { call, put }) {
      const detail = yield call(getDetailData, { id });
      yield put({ type: 'getDetailSuccess', payload: detail });
    }
  },

  subscriptions: {}
};
