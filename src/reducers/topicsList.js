import * as types from '../constans';

const initState = {
  list: [],
  page: 1,
  tab: 'ask',
  limit: 20
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_TOPICS_LIST_PAGE:
      return {
        ...state,
        page: action.page
      };
    case types.GET_TOPICS_LIST:
      return {
        ...state,
        list: action.list
      };
    case types.CHANGE_TOPICS_LIST_TAB:
      return {
        ...state,
        tab: action.tab
      };
    case types.RESET_TOPICS_LIST:
      return {
        ...state,
        list: [],
        page: 1,
        tab: 'ask',
        limit: 20
      };
    default:
      return state;
  }
};
