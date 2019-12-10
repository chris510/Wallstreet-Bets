import { RECEIVE_DEMO_STATE, REMOVE_DEMO_STATE } from "../actions/demo_actions";
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';


const _nullUi = {
  demoUser: false,
  modal: null
}

const uiReducer = ( oldState = _nullUi, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_DEMO_STATE:
      return action.demoUser; // { demoUser: false }
    case REMOVE_DEMO_STATE:
      return action.demoUser;
    case OPEN_MODAL:
      nextState.modal = action.modal
      return nextState
    case CLOSE_MODAL:
      nextState.modal = null
      return nextState
    default:
      return oldState;
  }
}

export default uiReducer;