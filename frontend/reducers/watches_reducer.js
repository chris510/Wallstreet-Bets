import {
  RECEIVE_WATCHED_STOCKS,
  RECEIVE_WATCH_INTRADAY_DATA
  // RECEIVE_WATCHED_STOCK,
  // CREATE_WATCHED_STOCK,
  // REMOVE_WATCHED_STOCK,
} from '../actions/watch_action';
import { RECEIVE_STOCKS } from '../actions/stock_actions';

const watchReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_STOCKS:
      return action.payload.watches
    case RECEIVE_WATCHED_STOCKS:
      return action.watchedStocks;
    case RECEIVE_WATCH_INTRADAY_DATA:
      nextState[action.symbol].intradayData = action.intradayData.chart;
      return nextState;
    // case RECEIVE_STOCKS:
    //   return action.payload.watches
    // case RECEIVE_WATCHED_STOCK:
    //   return Object.assign({}, oldState, action.watchedStock);
      // return action.watchedStock;
    // case CREATE_WATCHED_STOCK:
    default:
      return oldState;
  }
}

export default watchReducer;