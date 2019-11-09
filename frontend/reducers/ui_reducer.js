import { RECEIVE_DEMO_STATE, REMOVE_DEMO_STATE } from "../actions/demo_actions";

const _nullUi = {
  demoUser: false,
}

const uiReducer = ( oldState = _nullUi, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DEMO_STATE:
      return action.demoUser; // { demoUser: false }
    case REMOVE_DEMO_STATE:
      return action.demoUser;
    default:
      return oldState;
  }
}

export default uiReducer;