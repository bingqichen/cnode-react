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
    changePage(state, action) {
      return { ...state, page: action.page };
    },
    getListSuccess(state, action) {
      return { ...state, list: action.list };
    },
    changeTab(state, action) {
      return { ...state, tab: action.tab };
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
    * getList(action, { call, put }) {
      const list = yield call(getListData, { params: action.params });
      yield put({ type: 'getListSuccess', list });
    }
  },

  subscriptions: {}
};
