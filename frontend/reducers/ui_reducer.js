import { RECEIVE_DEMO, REMOVE_DEMO } from "../actions/demo_actions";

const _nullUi = {
  demoUser: false,
}

const uiReducer = ( oldState = _nullUi, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DEMO:
      // return Object.assign({}, oldState, action.boolean )
      // return { [demoUser]: action.boolean };
      return action.demoUser; // { demoUser: false }
    case REMOVE_DEMO:
      return action.demoUser;
    default:
      return oldState;
  }
}

export default uiReducer;