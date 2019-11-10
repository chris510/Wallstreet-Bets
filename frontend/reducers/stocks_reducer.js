import { 
  RECEIVE_STOCK, 
  RECEIVE_STOCKS, 
  RECEIVE_STOCK_INFO,
  RECEIVE_STOCK_NEWS
} from '../actions/stock_actions';

const stocksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    // case RECEIVE_STOCK:
    //   return Object.assign({}, oldState, { [action.stock.symbol]: action.stock})
    case RECEIVE_STOCKS:
      // return Object.assign({}, oldState, action.payload.stock);
      return action.payload.stock;
      // nextState.payload.stocks = action.payload.stocks
      // return nextState;
    case RECEIVE_STOCK_INFO:
      debugger
      nextState[action.symbol].info = action.info;
      return nextState;
    case RECEIVE_STOCK_NEWS:
      // debugger
      // return Object.assign({}, oldState, { [action.symbol]: action.news});
      nextState[action.symbol].news = action.news.articles;
      return nextState;
    default: 
      return oldState;
  }
}

export default stocksReducer;