import {
  RECEIVE_WATCHED_STOCKS,
  RECEIVE_WATCHED_STOCK,
  CREATE_WATCHED_STOCK,
  REMOVE_WATCHED_STOCK,
} from '../actions/watch_action';

const watchReducer = (oldState= {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_WATCHED_STOCKS:
      return action.watchedStocks;
    // case RECEIVE_STOCKS:
    //   return action.payload.watches
    case RECEIVE_WATCHED_STOCK:
      return Object.assign({}, oldState, action.watchedStock);
      // return action.watchedStock;
    // case CREATE_WATCHED_STOCK:
    default:
      return oldState;
  }
}

export default watchReducer;