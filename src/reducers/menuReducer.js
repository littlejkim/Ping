import types from '../actions/types';

const count = 0;

export default (state = count, action) => {
  switch (action.type) {
    case types.MENU_ADD:
      return state + action.payload;
    case types.MENU_DELETE:
      return state - action.payload;
    default:
      return state;
  }
};
