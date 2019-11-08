import { RECEIVE_STOCK, RECEIVE_STOCKS } from '../actions/stock_actions';

const stocksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_STOCK:
      return Object.assign({}, oldState, { [action.stock.symbol]: action.stock})
    case RECEIVE_STOCKS:
      return action.stocks;
    default: 
      return oldState;
  }
}

export default stocksReducer;