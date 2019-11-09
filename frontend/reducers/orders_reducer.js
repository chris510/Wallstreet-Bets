import { RECEIVE_STOCKS } from '../actions/stock_actions';

const ordersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_STOCKS:
      // return Object.assign({}, oldState, { [action.stocks.order.user_id]: action.stocks.orders })
      // debugger
      // return { [action.payload.order.user_id]: action.payload.order};
      return action.payload.order
    default:
      return oldState
  }
}

export default ordersReducer;