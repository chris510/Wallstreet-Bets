import { 
  RECEIVE_STOCK, 
  RECEIVE_STOCKS, 
  RECEIVE_STOCK_INTRADAY_DATA,
  RECEIVE_STOCK_INFO,
  RECEIVE_STOCK_NEWS
} from '../actions/stock_actions';

const stocksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_STOCK:
      nextState[action.stock.symbol] = action.stock;
      return nextState;
    case RECEIVE_STOCKS:
      return action.payload.stock;
    case RECEIVE_STOCK_INTRADAY_DATA:
      // return Object.assign({}, oldState, { [action.symbol]: action.intradayData.chart });
      nextState[action.symbol].intradayData = action.intradayData.chart;
      return nextState
    case RECEIVE_STOCK_INFO:
      // return Object.assign({}, oldState, { [action.symbol]: action.info})
      nextState[action.symbol].info = action.info;
      return nextState;
    case RECEIVE_STOCK_NEWS:
      nextState[action.symbol].news = action.news.articles;
      return nextState;
    default: 
      return oldState;
  }
}

export default stocksReducer;

// case RECEIVE_INTRADAY_DATA:
// let intradayData = { intradayData: action.intradayData.chart };
// newStockState = merge({}, state, { [action.ticker]: intradayData });
// return newStockState;