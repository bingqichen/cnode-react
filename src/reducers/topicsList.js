import * as types from '../constans';

const initState = {
  list: [],
  page: 0,
  tab: 'share',
  limit: 20,
  mdrender: true
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
        list: action.page === 1 ? action.list : state.list.concat(action.list)
      };
    default:
      return state;
  }
};
