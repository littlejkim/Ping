import types from './types';

export function menuAdd(num) {
  return {
    type: types.MENU_ADD,
    payload: num,
  };
}

export function menuDelete(num) {
  return {
    type: types.MENU_DELETE,
    payload: num,
  };
}
