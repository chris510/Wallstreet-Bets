import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER_PORTFOLIO } from '../actions/portfolio_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    // case RECEIVE_USER_PORTFOLIO:
    //   let nextState = Object.assign( {}, oldState )
    //   nextState[action.user.id].action.portfolio = action.portfolio
      // return Object.assign({}, oldState, { [action.user.id].portfolio = action.portfolio })
      return nextState
    default:
      return oldState;
  }
};

export default usersReducer;