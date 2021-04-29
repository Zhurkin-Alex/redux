import {ADD} from './actiontupes'


export function add (payload) {
  return {
  type: ADD,
  payload,
  };
  }
