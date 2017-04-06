import { getListData } from '@/services/topicsList';

export default {
  namespace: 'topicsList',

  state: {
    list: [],
    page: 1,
    tab: 'all',
    limit: 40
  },

  reducers: {
    changePage(state, { payload: page }) {
      return { ...state, page };
    },
    getListSuccess(state, { payload: list }) {
      return { ...state, list };
    },
    changeTab(state, { payload: tab }) {
      return { ...state, tab };
    },
    reset(state) {
      return {
        ...state,
        list: [],
        page: 1,
        tab: 'all',
        limit: 40
      };
    }
  },

  effects: {
    * getList({ payload: params }, { call, put }) {
      const list = yield call(getListData, { params });
      yield put({ type: 'getListSuccess', payload: list });
    }
  },

  subscriptions: {}
};
