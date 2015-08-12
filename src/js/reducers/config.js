// import {
//   FETCH_CONFIG_PENDING,
//   FETCH_CONFIG_FULFILLED,
//   FETCH_CONFIG_REJECTED
// } from '../actions/config';
// ^^^ Babel has a problem with this for some reason

import * as configActions from '../actions/config';

export default (state = null, action) => {
  switch (action.type) {
    case configActions.FETCH_CONFIG_FULFILLED:
      return action.config;
    default:
      return state;
  }
};