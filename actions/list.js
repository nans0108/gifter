import { ADD_LIST } from './types.js';

export const addList = list => {
  return {
    type: ADD_LIST,
    payload: list
  }
}
