import { RECEIVE_DEMO, REMOVE_DEMO } from "../actions/demo_actions";

// const _nullUi = {
//   Demo: false,
// }

const uiReducer = ( oldState = false, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DEMO:
      return action.boolean;
    case REMOVE_DEMO:
      return action.boolean;
    default:
      return oldState;
  }
}

export default uiReducer;