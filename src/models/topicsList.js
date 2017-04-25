import { routerRedux } from 'dva/router.js';
import { getListData } from '@/services/topicsList';

export default {
  namespace: 'topicsList',

  state: {
    list: [],
    page: 1,
    tab: 'all',
    limit: 40,
    mdrender: true
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
        limit: 40,
        mdrender: true
      };
    }
  },

  effects: {
    * getList({ payload: { page, tab, limit, mdrender } }, { call, put }) {
      const list = yield call(getListData, { page, tab, limit, mdrender });
      yield put(routerRedux.push(`/topicslist?page=${page}&tab=${tab}`));
      yield put({ type: 'getListSuccess', payload: list });
    }
  },

  subscriptions: {}
};
