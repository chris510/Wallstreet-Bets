import { RECEIVE_USER_PORTFOLIO } from '../actions/portfolio_actions';

const portfoliosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
      case RECEIVE_USER_PORTFOLIO:
        // let nextState = Object.assign( {}, oldState )
        // nextState[action.user.id].action.portfolio = action.portfolio
      // return Object.assign({}, oldState, { [action.user.id].portfolio = action.portfolio })
        // return nextState
        return action.portfolio
    default:
      return oldState;
  }
};

export default portfoliosReducer;