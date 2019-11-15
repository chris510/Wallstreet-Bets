import { RECEIVE_STOCKS } from '../actions/stock_actions';
import { RECEIVE_ORDER } from '../actions/order_actions';

const ordersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_STOCKS:
      // return Object.assign({}, oldState, { [action.stocks.order.user_id]: action.stocks.orders })
      // return { [action.payload.order.user_id]: action.payload.order};
      return action.payload.order
    // case RECEIVE_ORDER:

    // case REMOVE_ORDER:

    default:
      return oldState
  }
}

export default ordersReducer;