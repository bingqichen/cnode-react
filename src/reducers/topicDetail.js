import * as types from '../constans';

const initState = {
  detail: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.GET_TOPIC_DETAIL:
      return {
        ...state,
        detail: action.detail
      };
    default:
      return state;
  }
};
