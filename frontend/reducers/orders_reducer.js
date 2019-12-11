import { RECEIVE_STOCKS } from '../actions/stock_actions';
import { RECEIVE_ORDER } from '../actions/order_actions';

const ordersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_STOCKS:
      return action.payload.order;
    case RECEIVE_ORDER:
      newState[action.order.id] = action.order;
      return newState;
    default:
      return oldState
  }
}

export default ordersReducer;